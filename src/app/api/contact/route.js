import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import nodemailer from "nodemailer";
import pool from "@/helper/db"; // Ensure this points to your connection pool

export const POST = async (request) => {
  const { Fname, Lname, Email, Phone, Message } = await request.json();
  const id = uuid();
  let connection; // Declare a variable to hold the connection
  try {
    // Get a connection from the pool
    connection = await pool.getConnection();

    // Insert data into MySQL database
    const [rows] = await connection.query(
      "INSERT INTO jsram (id, date, Fname, Lname, Phone, Email, Message) VALUES (?, NOW(), ?, ?, ?, ?, ?)",
      [id, Fname, Lname, Phone, Email, Message]
    );

    // Nodemailer configuration for sending emails
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false // self-signed SSL allow
      }
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: "JSR Contact form",
      html: `<html>
                <body>
                  <h3>You've got a new mail from ${Fname} ${Lname}, their email is: ✉️${Email}, their phone number is: ${Phone}</h3>
                  <p>Message:</p>
                  <p>${Message}</p>
                </body>
              </html>`,
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: Email,
      subject: "Thank You for contacting JSR!",
      html: `<html>
              <body>
                <h2>Hey ${Fname},</h2>
                <p>Your query is noted! Our team will contact you as soon as possible.</p>
              </body>
             </html>`,
    });

    // Return success response
    return NextResponse.json({ Message: "Success", success: true });
  } catch (error) {
    console.error("Error occurred: ", error);
    return NextResponse.json({ Message: "Failed", success: false });
  } finally {
    if (connection) connection.release(); // Always release the connection back to the pool if it was acquired
  }
};
