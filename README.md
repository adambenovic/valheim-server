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

## Installed mods & required by clients

- [BepInEx](https://thunderstore.io/c/valheim/p/denikson/BepInExPack_Valheim/)
- [ValheimPLUS v0.9.16.2](https://www.nexusmods.com/valheim/mods/2323)
- [Jotunn the Valheim Library v2.24.3](https://www.nexusmods.com/valheim/mods/1138)
- [ValheimRAFT - Continued v3.0.5](https://www.nexusmods.com/valheim/mods/2630)
- [XPortal v1.2.22](https://www.nexusmods.com/valheim/mods/2239)

## Client mods recommended
- [Craft/do stuff from chests](https://www.nexusmods.com/valheim/mods/40)
- [Clock](https://www.nexusmods.com/valheim/mods/85)
- [Equipment and Quick Slots](https://www.nexusmods.com/valheim/mods/92)
- [Quick Stack - Store - Sort - Trash - Restock](https://www.nexusmods.com/valheim/mods/2094)
- [Plant Everything](https://www.nexusmods.com/valheim/mods/1042)
- [Floating Items](https://www.nexusmods.com/valheim/mods/241)
- [MultiCraft](https://www.nexusmods.com/valheim/mods/263)
- [MassFarming](https://www.nexusmods.com/valheim/mods/527)

## Thanks to
[Vlado](https://github.com/vbieleny) for the base code and idea
