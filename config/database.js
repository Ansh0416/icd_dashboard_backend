import sql from "mssql";
import dotenv from "dotenv";

dotenv.config();

const config = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

let pool;

export const connectToDatabase = async () => {
  if (!pool) {
    try {
      pool = await sql.connect(config);
      console.log("Connected to MSSQL");
    } catch (err) {
      console.error("MSSQL connection error:", err);
      throw err;
    }
  }
  return pool;
};
