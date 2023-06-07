import React from "react";

export default function List({ people }) {
  const res = people.map((p) => <div style={{padding:'10px'}} key={p.name}>{p.name}</div>);
  return res;
}
