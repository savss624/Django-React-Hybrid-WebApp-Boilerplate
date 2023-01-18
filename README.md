# boilerplate

### Tech stack

- Docker
- Nginx
- Django
- PostgreSQL
- Webpack
- ReactJS
- TailwindCSS
- ESLint
- Flake8
- Yarn
- NPM
- Git

### How to add new packages / libraries in development server ?

- For Node: Run `yarn add ( with -D depending on package type ) package_name ( with version if required )`.
- For Python: Add `library_name with version` in [requirements.txt](requirements.txt) / [requirements.dev.txt](requirements.dev.txt) ( depending on library type ).
- Run `docker-compose build --no-cache` at the root post that in both ^ cases.
