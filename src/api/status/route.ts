import { NextResponse } from "next/server";

export async function GET(request: Request) {
    console.log("entrou")
  return new NextResponse(JSON.stringify("Erick é feio"), {
    status: 200,
    statusText: "OK",
  });
}
