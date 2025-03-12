# automate-node

## How to run this app on local?

- Run `npm i`
- Run `export DEBUG=info,debug,error` on mac (Add environment variable)
- Run `export NODE_ENV=development` on mac (Add environment variable)
- Run `export PORT=8080` on mac (Add environment variable) - Do not set this on deployment platform, cause platform auto assigns port.
- Run `export DB_PASSWORD=<your database password>` on mac (Add environment variable)
- Run `node index.js`

## Check list for node.js app deployment
- White list `host IP address` of node.js app to `mongodb-atlas`