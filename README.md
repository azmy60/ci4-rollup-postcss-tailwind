# ci4-rollup-postcss-tailwind

## Installation

```bash
composer install
npm install
npm run prod
php spark serve
```

You don't need to include /node_modules directory in production server. It is used for building distribution files like `public/js/main.js` and `public/css/main.css`.

## Other commands

```bash
npm start            # Hot reload (use browser extension)
npm test
npm run build
npm run prod
```

## Hot reload (live server)

Use a browser extension to inject a live server script.

Install Live Server Web Extension for [Chrome](https://addons.mozilla.org/en-US/firefox/addon/live-server-web-extension/)
/ [Firefox](https://chrome.google.com/webstore/detail/live-server-web-extension/fiegdmejfepffgpnejdinekhfieaogmj)
