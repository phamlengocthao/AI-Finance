import express from "express";
import cors from "cors";
import analyzeRoute from "./routes/analyze.route.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// API chính
app.use("/api", analyzeRoute);

// test server
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
