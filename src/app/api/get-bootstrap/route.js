import { BootstrapStaticData } from "@/lib/_api";
import { NextResponse } from "next/server";

export async function GET(req, res) {
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
        path: req.nextUrl.pathname, 
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

// export async function GET(req, res) {
//   console.log("Request received!!!");
//   try {
//     const response = await fetch(
//       `https://fantasy.premierleague.com/api/bootstrap-static/`
//     );
//     if (!response.ok) {
//       throw new Error(
//         "Failed to fetch bootstrap-static data from serverless function"
//       );
//     }
//     const data = await response.json();
//     return NextResponse.json(
//       {
//          data,
//         path: request.nextUrl.pathname,
//       },
//       {
//         status: 200,
//       }
//     );
//     // res.status(200).json(data);
//   } catch (error) {
//     console.log( "Failed to fetch data from serverless function", error);
//   }
// }

// import { NextResponse } from 'next/server';

// export function GET(request) {
//   return NextResponse.json(
//     {
//       body: request.body,
//       path: request.nextUrl.pathname,
//       cookies: request.cookies.getAll(),
//     },
//     {
//       status: 200,
//     },
//   );
// }
