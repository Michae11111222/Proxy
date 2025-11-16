// server.js
const corsAnywhere = require("cors-anywhere");

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;

corsAnywhere
  .createServer({
    originWhitelist: [], // allow all origins — you may want to restrict this
    removeHeaders: ["cookie", "cookie2"], // remove cookies for security
    requireHeader: [], // you can require a header if you want to restrict usage
  })
  .listen(port, host, () => {
    console.log(`CORS Anywhere running on ${host}:${port}`);
  });
