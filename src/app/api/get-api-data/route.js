import { NextResponse } from "next/server";
import { GetAllGameweeksData } from "@/app/utils/_helpers";
import { FetchGameWeekData } from "@/lib/_api";

export async function GET() {
  try {
    const data = await GetAllGameweeksData(FetchGameWeekData);

    return NextResponse.json(
      {
       apiData :data
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Failed to GetAllGWData serverless function", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
