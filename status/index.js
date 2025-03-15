const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const Gamedig = require('gamedig');
const path = require('path');

const app = express();
const port = process.env.NODE_PORT || 3529;
let shuttingDown = false;

// Enable CORS
app.use(cors({
    origin: [process.env.ORIGIN]
}));

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to check Valheim server status
app.get('/status', async (req, res) => {
    exec("docker ps -f name=valheim-server-valheim-1 --format '{{.Status}}'", (error, stdout, stderr) => {
        const output = stdout.trim();
        if (output && output.length > 0) {
            if (shuttingDown) {
                res.send('shutting-down');
            } else {
                res.send(output);
            }
        } else {
            res.send('offline');
        }
    });
});

// API endpoint to get player count
app.get('/players', async (req, res) => {
    Gamedig.GameDig.query({
        type: 'valheim',
        host: 'valheim',
    }).then(state => {
        res.send(`${state.players.length.toString().trim()}/${state.maxplayers}`);
    }).catch(error => {
        console.log(`/players error: ${error}`);
        res.send('Unknown');
    });
});

// API endpoint to get server version
app.get('/version', async (req, res) => {
    Gamedig.GameDig.query({
        type: 'valheim',
        host: 'valheim',
    }).then(state => {
        if (state.raw.tags) {
            res.send(state.raw.tags[0].trim().replace("g=", ""));
        } else {
            res.send("Unknown");
        }
    }).catch(error => {
        console.log(`/version error: ${error}`);
        res.send('Unknown');
    });
});

// API endpoint to start Valheim server
app.post('/start', async (req, res) => {
    exec('docker compose start valheim', { cwd: '/opt/valheim' }, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error}`);
            res.send('0');
            return;
        }
        res.send('1');
    });
});

// API endpoint to stop Valheim server
app.post('/stop', async (req, res) => {
    shuttingDown = true;
    exec('docker compose stop valheim', { cwd: '/opt/valheim' }, (error, stdout, stderr) => {
        shuttingDown = false;
        if (error) {
            console.log(`error: ${error}`);
            res.send('0');
            return;
        }
        res.send('1');
    });
});

// Serve index.html when accessing the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Valheim status server running at port ${port}`);
});
