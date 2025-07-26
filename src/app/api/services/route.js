import { NextResponse } from "next/server";
import pool from "@/helper/db"; // Ensure this points to your connection pool

export const GET = async () => {
    let connection;
    try {
        connection = await pool.getConnection();
        const [rows] = await connection.query("SELECT * FROM services");
        return NextResponse.json({ result: rows });
    } catch (error) {
        console.log(error.Message)
        return NextResponse.json({
            message: "Failed",
            success: false
        });
    } finally {
        if (connection) connection.release();
    }
};

