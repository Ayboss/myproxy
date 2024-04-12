const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/getjobs", async (req, res) => {
  const username = process.env.GREENHOUSE;
  const password = "";

  const credentials = `${username}:${password}`;
  const base64Credentials = btoa(credentials);

  try {
    const response = await axios({
      method: "get",
      url: "https://harvest.greenhouse.io/v1/jobs",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    });

    return res.status(200).json({
      data: response.data,
    });
  } catch (err) {
    console.log(err);
    res.status("err").json({
      err: err,
      msg: "an error occured",
    });
  }
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server is ready");
});
