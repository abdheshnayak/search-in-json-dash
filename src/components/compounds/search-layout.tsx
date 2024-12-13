import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { search } from "search-in-json";

export default function SearchLayout({
  data
}:{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data:any;
}) {

  const [sText, setSText] = useState("order");
  const [res, setRes] = useState({});
  // const [t, setT] = useState(0);
  useEffect(() => {
    (async () => {
      // const oldTime = new Date();
      setRes(
        await search({
          data,
          text: sText,
          ignoreCamelCase: true,
          searchIn: "both"
          // regex: /order/gi,
        })
      );
      // setT(curr - oldTime);
    })();
  }, [sText,data]);


  return (
    <div className="max-w-[30vw] w-full flex-col gap-3 flex">
      <Card className="">
        <CardHeader>
          <CardTitle>Search</CardTitle>
        </CardHeader>
        <CardContent>
          <Input value={sText} onChange={(e) => setSText(e.target.value)} />
        </CardContent>

      </Card>

      <Card className="flex-1 flex flex-col">
        <CardHeader>
          <CardTitle>Results</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 max-h-[calc(100vh-20rem)] overflow-auto">
          <pre className="">{ JSON.stringify(res, null, 2) }</pre>
        </CardContent>
      </Card>
    </div>
  );
}
