import express from "express";
import cors from "cors";
import executeStoredProcedure from "./storedprocedure/sp.js";
import executeStoredProcedure_pie_bar from "./storedprocedure/sp_pie_bar.js";
const app = express();

// Use the CORS middleware
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const data = await executeStoredProcedure();
    res.json(data); // Send JSON data
  } catch (error) {
    console.error("Error executing stored procedure:", error);
    res.status(500).json({
      error: "Error executing stored procedure. Check server logs for details.",
    });
  }
});

app.get("/pie-bar", async (req, res) => {
  try {
    const data = await executeStoredProcedure_pie_bar();
    res.json(data); // Send JSON data
  } catch (error) {
    console.error("Error executing stored procedure:", error);
    res.status(500).json({
      error: "Error executing stored procedure. Check server logs for details.",
    });
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
