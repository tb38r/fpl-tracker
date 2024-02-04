import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `https://fantasy.premierleague.com/api/bootstrap-static/`
    );
    if (!response.ok) {
      throw new Error(
        "Failed to fetch bootstrap-static data from serverless function"
      );
    }
    const data = await response.json();

    return NextResponse.json(
      {
        data,
        events: data.events,
        element_types: data.element_types,
        elements: data.elements,
        teams: data.teams,

      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Failed to fetch data from serverless function", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

