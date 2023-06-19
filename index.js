const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.post("/bard", async (req, res) => {
  const { question } = req.body;

  const { default: fetch } = await import("node-fetch");
  const BARD_URL = "https://bard.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate";
  const SECURE1PSID = process.env.SECURE1PSID;
  const AT_KEY = process.env.AT_KEY;

  const params = new URLSearchParams({
    bl: "boq_assistant-bard-web-server_20230613.09_p0",
    _reqid: Number(Math.random().toString().slice(2, 8)),
    rt: "c",
  });

  const messageRequest = [[question], null, ["", "", ""]];

  const headers = {
    "X-Same-Domain": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    Cookie: `__Secure-1PSID=${SECURE1PSID};`,
  };

  const urlencoded = new URLSearchParams();
  urlencoded.append("at", AT_KEY);
  urlencoded.append(
    "f.req",
    JSON.stringify([null, JSON.stringify(messageRequest)])
  );

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: urlencoded,
    redirect: "follow",
  };

  try {
    const request = await fetch(`${BARD_URL}?${params}`, requestOptions);
    const response = await request.text();

    const output = JSON.parse(response.split(/\r?\n/)[3])[0][2];
    const content = JSON.parse(output)[0][0];

    console.log(content);
    res.json({ result: content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
