import connection from "@/helper/db";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { v4 as uuid } from "uuid";

export async function POST(request) {
  console.log("hello");
  try {
    const { Fname, Lname, Email, Phone, Message } = await request.json();
    const unique_id = uuid();

    // Insert data into the database
    await new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO jsram (id, Fname ,Lname ,Email ,Phone ,Message) VALUES (?, ?, ?, ?, ? ,?)",
        [unique_id, Fname , Lname , Email, Phone, Message],
        (err, results, fields) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });

    // Send email using nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "abhi.gmail.com",
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
     
      text: `Fname: ${Fname}\n Lname: ${Lname} \nEmail: ${Email} \nPhone: ${Phone}  \nMessage: ${Message}`,
    };

    transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({
      message: "Query sent",
      success: true,
    });
  } catch (error) {
    console.error("Error:", error.message);
    // Return error response
    return NextResponse.json({
      message: "Failed to send query",
      success: false,
    });
  }
}
