import clientPromise from "@/lib/mongodb"
import { redirect } from "next/navigation";

export default async function Page({params}){
    const shorturl = (await params).shorturl

    const client=await clientPromise;
    const db=client.db("bitlinks")
    const collection=db.collection("url")

    //  check if the short url exist
  const doc= collection.findOne({shorturl:shorturl})
  if(doc){
    redirect(doc.url)
  }else{
    redirect(`${NEXT_PUBLIC_HOST}`)
  }

  return <div>My Post : {url}</div>
}