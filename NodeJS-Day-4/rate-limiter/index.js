const express = require("express");
const rateLimiter = require("./rateLimiter");

const app = express();

// rate limiter middleware
app.use(rateLimiter(10, 60 * 1000)); // 10 requests per minute

app.get("/", (req, res) => {
  res.send("Request successful");
});

app.get("/test", (req, res) => {
  res.json({ status: "OK" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
