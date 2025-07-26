"use client";
import React, { useState } from "react";
import Link from "next/link";


const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState(false);

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

   fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
    seturl("");
    setshorturl("");
    alert(result.message);
  })
  .catch((error) => console.error(error));
  }
 

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0 max-w-xl mx-auto my-12">
  <div className="bg-purple-100 p-6 sm:p-8 rounded-2xl shadow-md flex flex-col gap-4">
    <h1 className="font-bold text-xl sm:text-2xl text-center">Generate your short URL</h1>

    <div className="flex flex-col gap-4">
      <input
        value={url}
        type="text"
        placeholder="Enter your URL"
        onChange={(e) => seturl(e.target.value)}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm sm:text-base"
      />
      <input
        value={shorturl}
        type="text"
        placeholder="Enter your preferred short URL text"
        onChange={(e) => setshorturl(e.target.value)}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm sm:text-base"
      />
      <button
        className="bg-purple-500 hover:bg-purple-600 transition-colors rounded-md p-2 sm:p-3 font-semibold text-white cursor-pointer"
        onClick={generate}
      >
        Generate
      </button>

      {generated && (
        <div className="mt-2 text-center">
          <span className="block text-sm font-medium mb-1">Your Link:</span>
          <code className="text-purple-700 break-all">
            <Link href={generated} target="_blank">
              {generated}
            </Link>
          </code>
        </div>
      )}
    </div>
  </div>
</div>
  )}


export default Shorten;
