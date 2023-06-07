import React from "react";
import { useState } from "react";

export default function Tours({ tours }) {
  const [show, isShow] = useState(true);

  console.log(tours);
  return (
    <main>
      <h1>tours</h1>
      <div className="container">
        {tours.map((t) => (
          <main key={t?.id}>
            <h3>{t?.name}</h3>
            <img src={t?.image} />
            <br />
            <button className="btn" onClick={() => isShow(!show)}>
              Show Info
            </button>
            <article>{show ? <h5>{t?.info}</h5> : null}</article>
          </main>
        ))}
      </div>
    </main>
  );
}
