import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { success: false, message: "All fields are required" },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("contacts");

  await collection.insertOne({
    name: body.name,
    email: body.email,
    message: body.message,
    createdAt: new Date(),
  });

  return NextResponse.json({
    success: true,
    message: "Message stored successfully",
  });
}
