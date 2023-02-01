# meripaste - a small pastebin clone

A small Pastebin clone put together in a couple days with the goal of learning about Express, MongoDB, and SvelteKit.

Each paste has a unique URL, can be up to 4096 characters long, and will be deleted automatically after an hour.

https://paste.meriso.lu

## Running the service
### Development
1. Run `npm install` in both the `api` and `frontend` directories.
2. Copy `.env.template` to `.env`. The defaults should work out of the box, but you can adjust specific values as needed.
3. Run `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up` to start the database, API, frontend and Mongo Express instance.

The `api/src`, `frontend/src`, and `frontend/static` directories are bind mounted, so any changes in those directories can be seen live inside the containers.

### Production
1. Ensure the environment variables specified in `.env.template` are made available to the containers, and that FRONTEND_ORIGIN and FRONTEND_PORT match your setup.
2. Run `docker-compose up` to start the database, API, and frontend.
