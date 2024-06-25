import sql from "mssql";
import { connectToDatabase } from "../config/database.js";

async function executeStoredProcedure_pie_bar() {
  try {
    // Connect to the database
    const pool = await connectToDatabase();
    const request = pool.request();

    // Execute the stored procedure
    const result_pie = await request.execute("NewDashboard_ICD_TxnsChart");

    // Log the results to the console
    console.log("Stored Procedure Results:");
    console.log(result_pie.recordset);

    return result_pie.recordset[0];

    // Close the database connection
    await pool.close();
  } catch (error) {
    console.error("Error executing stored procedure:", error);
  }
}

export default executeStoredProcedure_pie_bar;
