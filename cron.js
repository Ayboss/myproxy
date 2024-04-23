const cron = require("cron");
const axios = require("axios");

const job = new cron.CronJob("*/14 * * * * ", async function () {
  console.log("restarting");
  try {
    console.log("activate restarting ");
    await axios.get("https://myproxy-4pxf.onrender.com/restart");
    console.log("restart done");
  } catch (err) {
    console.log("Err restarting");
  }
});

module.exports = job;
