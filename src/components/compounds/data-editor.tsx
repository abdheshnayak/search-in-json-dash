import { Textarea } from "~/components/ui/textarea"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { data } from "./data";
import { useEffect, useState } from "react";

export default function DataEditor({
  setData,
  currentData,
}:{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    currentData:any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setData:(data:any)=>void;
  }) {

  const [dataStr, setDataStr] = useState(JSON.stringify(data,null,2));

  useEffect(() => {
    try {
      const dt = JSON.parse(dataStr)

      if (JSON.stringify(currentData)==JSON.stringify(dt)){
        return
      };
      setData(dt);
    } catch (e) {
      console.error(e);
    }
  }, [dataStr]);

  return (
    <Card className="flex-[2] flex flex-col">
      <CardHeader>
        <CardTitle>Search Data</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <Textarea className="h-full w-full" placeholder={JSON.stringify(data,null,2)} value={dataStr} onChange={(e)=>{
          setDataStr(e.target.value);
        }} />

      </CardContent>
    </Card>
  );
}
