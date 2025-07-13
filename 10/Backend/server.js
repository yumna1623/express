import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let isChanged = false;
let latestData = { color: "blue", text: "Click Me" };

app.post("/change", (req, res) => {
  isChanged = !isChanged;

  if (isChanged) {
    latestData = { color: "green", text: "Clicked!" };
  } else {
    latestData = { color: "blue", text: "Click Me" };
  }

  res.sendStatus(200);
});

app.get("/event", (req, res) => {
  res.json(latestData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
