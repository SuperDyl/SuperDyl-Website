# Look, a Website

## Setup

Setup to run in node 20.
This may require using nvm:

```bash
nvm install 20
nvm use 20
```

```bash
npm i;
npm run build;
```

You need to setup the auto-update script

```bash
cd updateHelper
npm i
cd ..
pm2 start ./updateHelper/update.js --name update-website -- --port 3019 --serverName update-website
```

This will necessitate some changes to your server configuration. Here's an example Caddyfile:

```caddyfile
meta.mydomain.net {
        handle_path /api/v1/update/website {
                reverse_proxy :3019
        }
}
```
