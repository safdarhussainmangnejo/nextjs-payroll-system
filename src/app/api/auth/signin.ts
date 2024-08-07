// src/pages/api/auth/signin.ts
import db from "@/libs/DB";
import { NextApiRequest, NextApiResponse } from "next";

// Define the User type
type User = {
  id: number;
  email: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    console.log("email in API: ", email);
    console.log("password in API: ", password);

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    try {
      // Perform the database query
      const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
        email,
      ]);

      // Assert the type of rows
      const users = rows as User[];

      if (users.length === 0) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const user = users[0];

      if (user?.password !== password) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Generate a token or session here if needed

      res.status(200).json({ message: "Sign-in successful" });
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Internal Server Error",
          error: (error as Error).message,
        });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
