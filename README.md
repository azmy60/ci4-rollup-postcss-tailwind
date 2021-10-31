# ci4-rollup-postcss-tailwind

## Installation
1. Create a database with any name
2. Import the sql file (app/Modules/setup/sql/database.sql) into your database
3. Copy or rename the env file to `.env` and open.
4. Set the `database.default` lines to your database configurations.
```php
database.default.hostname = localhost
database.default.database = ci4-rpt-todos
database.default.username = root
database.default.password = root
database.default.DBDriver = MySQLi
```
5. Finally, run these commands in your terminal
```bash
# install local dependencies
composer install
npm install

# build javascripts and css
npm run build

# serve a local server
php spark serve
```
