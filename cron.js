const cron = require("node-cron");
const axios = require("axios");

console.log("enters here regardless");

cron.schedule("*/14 * * * * ", async function () {
  console.log("restarting");
  try {
    console.log("activate restarting ");
    await axios.get("https://myproxy-4pxf.onrender.com/restart");
    console.log("restart done");
  } catch (err) {
    console.log("Err restarting");
  }
});
