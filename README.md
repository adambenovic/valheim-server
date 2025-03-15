# Valheim server

Configure before running:
- path - update your server path in [.env](.env)
- node port - update your preferred node port in both [.env](.env) and [status/.env](status/.env)
- server variables - change in [valheim.env](valheim.env)
- CORS - set your origin domain in [status/.env](status/.env)

Run it:

```docker compose up -d```

Stop it:

```docker compose down```


## Thanks to
[Vlado](https://github.com/vbieleny) for the base code and idea
