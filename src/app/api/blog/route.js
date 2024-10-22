import { NextResponse } from "next/server";
import pool from "@/helper/db"; // Ensure this points to your connection pool

export const GET = async () => {
  let connection; // Declare a variable to hold the connection
  try {
    // Get a connection from the pool
    connection = await pool.getConnection();

    // Insert data into MySQL database
    const [rows] = await connection.query("SELECT * FROM blog");
    // Return success response
    return NextResponse.json({ result: rows });
  } catch (error) {
    console.error("Error occurred: ", error);
    return NextResponse.json({ Message: "Failed", success: false });
  } finally {
    if (connection) connection.release(); // Always release the connection back to the pool if it was acquired
  }
};
