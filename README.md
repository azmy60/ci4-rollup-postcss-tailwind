# ci4-rollup-postcss-tailwind

## Installation
1. Create a new database
2. Copy or rename the env file to `.env` and open
3. Set the following `database.default` lines depending on your database configurations
```php
database.default.hostname = localhost
database.default.database = ci4-rpt-todos
database.default.username = root
database.default.password = root
database.default.DBDriver = MySQLi
```
5. Run these commands in your terminal
```bash
# Install local dependencies
composer install
npm install

# Build javascripts and css
npm run build

# Migrate database
php spark migrate

# Serve a local server
php spark serve
```

## Commands
```bash
# Main commands
php spark serve     # Serve a local server
npm run start       # Serve + watch changes in php(views)/js/css & auto build
npm run build       # Build js & css (not optimized)
npm run production  # Build js & css (optimized for production)

# Others
npm run build:css   # Build only css
npm run build:js    # Build only js
npm run watch:css   # Watch only css
npm run watch:js    # Watch only js
npm run watch:app   # Watch only files in ./app/Views and ./public
```
