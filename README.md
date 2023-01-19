# boilerplate

### Local Setup

- Install docker, docker-compose & git.
- Run `docker-compose build` & `docker-compose up` to run the app.
- Run `docker exec -i db_container_name pg_restore -c -U postgres -d devdb  < db.tar` parallely for populating local db using `db.tar` dump.

### How to add new packages / libraries in development server ?

- For Node: Run `yarn add ( with -D depending on package type ) package_name ( with version if required )`.
- For Python: Add `library_name with version` in [requirements.txt](requirements.txt) / [requirements.dev.txt](requirements.dev.txt) ( depending on library type ).
- Run `docker-compose build --no-cache` at the root post that in both ^ cases.

### How to update the db dump ?

- Run `docker exec -i db_container_name pg_dump -U postgres -F t devdb > db.tar` for updating the dump in `db.tar` file.
- Run `docker-compose down` and delete `db_volume` in docker.
- Run `docker-compose up` and `docker exec -i db_container_name pg_restore -c -U postgres -d devdb  < db.tar` parallely for updating the local db.

### Tech stack

- Docker
- Nginx
- Django
- PostgreSQL
- Webpack
- ReactJS ( ES6 )
- TailwindCSS
- ESLint
- Flake8
- Yarn & NPM
- Git
