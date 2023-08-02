import { NextResponse } from "next/server";
import database from "@/app/database";
import { RowDataPacket } from "mysql2";

export async function POST(request: Request) {
  const formData = await request.formData();
  const username = formData.get("user_name_info") || "";
  const password = formData.get("user_password_info") || "";
  const userId = request.headers.get('Authorization');
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
    select * FROM user WHERE user_name_info = ? 
    `;
  const result = await database.execute<
    ({
      userid: number;
      password: string;
      token: number | null;
    } & RowDataPacket)[]
  >(query, [username]);
  const rows = result[0];
  if (rows.length === 0) {
    return NextResponse.json({
      errors: { username: "User not found, please hit REGISTER to create your account!" },
    }, {
      status: 400,
    });
  }
  const user = rows[0];
  const response = NextResponse.json({
    token: user.userid,
  });
  response.cookies.set({
    name: 'userid',
    value: `${user.userid}`,
    httpOnly: true,
    maxAge: 3600,
  });
  return response;
}


