import sql from "mssql";
import { connectToDatabase } from "../config/database.js";

async function executeStoredProcedure() {
  try {
    // Connect to the database
    const pool = await connectToDatabase();
    const request = pool.request();

    // Execute the stored procedure
    const result = await request.execute("NewDashboard_ICD_DashboardCount");

    // Log the results to the console
    console.log("Stored Procedure Results:");
    console.log(result.recordset);

    return result.recordset[0];

    // Close the database connection
    await pool.close();
  } catch (error) {
    console.error("Error executing stored procedure:", error);
  }
}

export default executeStoredProcedure;
