import { NextResponse } from "next/server";

export async function GET(request) {
  const res = await fetch("https://a3f7-202-84-41-238.ngrok-free.app/api/v1/contents?page=1");
  const data = await res.json();
  return NextResponse.json(data);
}