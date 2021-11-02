# ci4-rollup-postcss-tailwind

## Installation
1. Create a new database with any name
2. Copy or rename the env file to `.env` and open.
3. Set the `database.default` lines to your database configurations.
```php
database.default.hostname = localhost
database.default.database = ci4-rpt-todos
database.default.username = root
database.default.password = root
database.default.DBDriver = MySQLi
```
5. Run these commands in your terminal
```bash
# install local dependencies
composer install
npm install

# build javascripts and css
npm run build

# serve a local server
php spark serve
```

## Commands
```bash
php spark serve
npm run start # watch js/css to build + live-server
npm run production # build for production
```
