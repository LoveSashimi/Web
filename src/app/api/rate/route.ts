import { NextResponse } from "next/server";
import database from "@/app/database";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const formData = await request.formData();
  const user_rating = formData.get("user_rating") || "";
    const country_id = formData.get("country_id") || "";
    const cookieUserId = cookies().get('userid');
    const userId = cookieUserId?.value;
console.log({ userId });
  try {
    const query = `
    INSERT INTO ratings(userid, user_rating, country_id) VALUES (?,?,?);
    `;
    const result = await database.execute<ResultSetHeader[]>(query, [
        userId,
        user_rating,
      country_id,
    ]);
    const rows = result[0];

    const user = rows[0];
  } catch (error) {
    return NextResponse.json(
      {
        errors: {
          countryid:
            "error.",
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
