# steam friend night server

`steam friend night` server built with [polka](https://github.com/lukeed/polka) and [objection.js](https://github.com/Vincit/objection.js/). Uses [steam-service](https://github.com/kevinfiol/steam-service) for Steam API data.

See [sfn-client](https://github.com/kevinfiol/sfn-client) for more information.

## Deploy (w/ Docker)

```bash
docker-compose build
docker-compose up
```

Run migrations
```bash
# use ash instead of bash for alpine-based image
docker exec -t -i <sfn_server_node container ID> ash

# from within docker container, run migration script
pnpm run migrate
```
