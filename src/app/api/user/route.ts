import { NextResponse } from "next/server";
import database from "@/app/database";
import { RowDataPacket } from "mysql2";

export async function POST(request: Request) {
  const formData = await request.formData();
  const username = formData.get("username") || "";
  const password = formData.get("password") || "";
    if (!username || ! password) {
      return NextResponse.json({
          'errors': {
              "password":"missing username or password",
          },
      }, {
          status: 400,
      });
    }

  const query = `
    select * FROM user WHERE username = ? 
    `;
  const result = await database.execute<
    ({
      username: string;
      password: string;
      token: number | null;
    } & RowDataPacket)[]
  >(query, [username]);
  const rows = result[0];
  if (rows.length === 0) {
    return NextResponse.json({
      errors: { username: "User not found" },
    }, {
      status: 400,
    });
  }
  const user = rows[0];
  const response = NextResponse.json({
    token: user.username,
  });
  response.cookies.set({
    name: 'token',
    value: user.username,
    httpOnly: true,
    maxAge: 3600,
  });
  return response;
}
