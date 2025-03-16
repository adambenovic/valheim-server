# Valheim server

FIrst, clone repository:
```
git clone git@github.com:adambenovic/valheim-server.git
```

If you change the folder name, start & stop of server will fail


Configure before running:
- server variables - change in [valheim.env](valheim.env)
- node port - update your preferred node port in both [.env](.env) and [status/.env](status/.env), default 3529
- CORS - set your origin domain in [status/.env](status/.env)

Run it:

```docker compose up -d```

Stop it:

```docker compose down```


## Thanks to
[Vlado](https://github.com/vbieleny) for the base code and idea
