const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

const router = require("./src/routes");

app.use(cors());
app.use(express.json());

app.use("/api", router);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
