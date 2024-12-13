"use client";
import { useState } from "react";
import { data } from "~/components/compounds/data";
import DataEditor from "~/components/compounds/data-editor";
import Navbar from "~/components/compounds/navbar"
import SearchLayout from "~/components/compounds/search-layout";


export default function Home() {
  const [dt, setData] = useState(data);

  return (
    <div className="h-screen max-h-[100vh] flex flex-col pb-3 gap-3">
      <Navbar></Navbar>
      <main className="flex flex-1 gap-3 px-3">
        <DataEditor currentData={dt} setData={(d)=>{setData(d)}} ></DataEditor>
        <SearchLayout data={dt}></SearchLayout>
      </main>
    </div>
  );
}
