# node_express_demo

### MongoDB

- Must be change your connection string (index.js)
  ```
  const { YOUR_CONNECTION_STRING } = require("./privacy/mongo");
  ```
  - Make ./privacy/mongo.js
  ```
  module.export = {
      YOUR_CONNECTION_STRING: " Put your connection string here! "
  }
  ```
  - Or modify index.js
  ```
  const YOUR_CONNECTION_STRING = " Put your connection string here! "
  ```
