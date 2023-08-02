import { NextResponse } from "next/server";
import database from "@/app/database";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export async function POST(request: Request) {
  const formData = await request.formData();
  const username = formData.get("user_name_info") || "";
  const password = formData.get("user_password_info") || "";
  if (username === "" || !password) {
    return NextResponse.json(
      {
        errors: {
          password: "Enter both username and password please!",
        },
      },
      {
        status: 400,
      }
    );
  }

  try {
    const query = `
    INSERT INTO user(user_name_info, user_password_info) VALUES (?,?);
    `;
    const result = await database.execute<ResultSetHeader[]>(query, [
      username,
      password,
    ]);
    const rows = result[0];

    const user = rows[0];
  } catch (error) {
    return NextResponse.json(
      {
        errors: {
          username:
            "User has already registered, please refresh the page to register! Once success, you will be guided back to homepage.",
        },
      },
      {
        status: 400,
      }
    );
  }

  const response = NextResponse.json({
    message: "success",
  });
  return response;
}
