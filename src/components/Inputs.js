import React from "react";

export default function Inputs(props) {
  const { setHtml, setJS1, setJS2, setJS3, setNode, setDb, setReact } = props;

  return (
    <div>
      <div>
        <span>HTML/CSS</span>
        <input
          type="number"
          onChange={(event) => setHtml(event.target.value)}
        />
      </div>
      <div>
        <span>JS1</span>
        <input type="number" onChange={(event) => setJS1(event.target.value)} />
      </div>
      <div>
        <span>JS2</span>
        <input type="number" onChange={(event) => setJS2(event.target.value)} />
      </div>
      <div>
        <span>JS3</span>
        <input type="number" onChange={(event) => setJS3(event.target.value)} />
      </div>
      <div>
        <span>NodeJS</span>
        <input
          type="number"
          onChange={(event) => setNode(event.target.value)}
        />
      </div>
      <div>
        <span>Databases</span>
        <input type="number" onChange={(event) => setDb(event.target.value)} />
      </div>
      <div>
        <span>React</span>
        <input
          type="number"
          onChange={(event) => setReact(event.target.value)}
        />
      </div>
    </div>
  );
}
