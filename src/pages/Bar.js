import React, { useState } from "react";
import Inputs from "../components/Inputs";
import { getBarChartUrl } from "../util/getChartUrl";

export default function Bar() {
  const dataSet = [];
  const [html, setHtml] = useState(0);
  dataSet[0] = html;
  const [JS1, setJS1] = useState(Math.floor(Math.random() * 10));
  dataSet[1] = JS1;
  const [JS2, setJS2] = useState(Math.floor(Math.random() * 10));
  dataSet[2] = JS2;
  const [JS3, setJS3] = useState(Math.floor(Math.random() * 10));
  dataSet[3] = JS3;
  const [node, setNode] = useState(Math.floor(Math.random() * 10));
  dataSet[4] = node;
  const [db, setDb] = useState(Math.floor(Math.random() * 10));
  dataSet[5] = db;
  const [react, setReact] = useState(Math.floor(Math.random() * 10));
  dataSet[6] = react;

  const barUrl = getBarChartUrl(dataSet);
  return (
    <div>
      <Inputs
        setHtml={setHtml}
        setJS1={setJS1}
        setJS2={setJS2}
        setJS3={setJS3}
        setNode={setNode}
        setDb={setDb}
        setReact={setReact}
      />
      <img alt="" src={barUrl} />
    </div>
  );
}
