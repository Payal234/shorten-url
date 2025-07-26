import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  
  const doc = await collection.findOne({ shorturl: body.shorturl });

  if (doc) {
    return NextResponse.json({
      success: false,
      error: true,
      message: "URL already exist:",
    });
  }

  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl,
  });

  return NextResponse.json({
    success: true,
    error: false,
    message: "finished", 
  });
}
