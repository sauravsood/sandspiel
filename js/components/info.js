import React from "react";

const Info = () => {
  return (
    <div className="Info">
      <h1>Sand Lab</h1>
      <p>
        Sand Lab is a copy of <a href="https://sandspiel.club">Sandspiel</a>,
        a falling sand game made by{" "}
        <a href="https://maxbittker.com">Max Bittker</a>. Pick an element,
        then draw with your finger. Everything stays on this iPad.
      </p>
      <p>
        Max says Sandspiel was inspired by ha55ii's{" "}
        <a href="https://dan-ball.jp/en/javagame/dust/">Powder Game</a>.
        Sandspiel's <a href="https://github.com/maxbittker/sandspiel">source code</a>{" "}
        is under the MIT licence.
      </p>
      <br />
      <hr />
      <br />
      <h2>What each one does</h2>
      <h4>Wall </h4>
      Indestructible.
      <h4>Sand </h4>
      Sinks in water.
      <h4>Water </h4>
      Puts out fire.
      <h4>Stone </h4>
      Forms arches, turns into sand under pressure.
      <h4>Ice </h4>
      Freezes Water, slippery!
      <h4>Gas </h4>
      Highly Flammable!
      <h4>Cloner </h4>
      Copies the first element it touches. 
      <h4>Mite </h4>
      Eats wood and plant, but loves dust! Slides on ice..
      <h4>Wood </h4>
      Sturdy, but biodegradable.
      <h4>Plant </h4>
      Thrives in wet enviroments.
      <h4>Fungus </h4>
      Spreads over everything.
      <h4>Seed </h4>
      Grows on sand, plant, and fungus.
      <h4>Fire </h4>
      Hot!
      <h4>Lava </h4>
      Flammable and heavy.
      <h4>Acid </h4>
      Corrodes other elements.
      <h4>Dust </h4>
      Pretty, but dangerously explosive.
      <h4>Oil </h4>
      Produces smoke when set on fire.
      <h4>Rocket </h4>
      Explodes into copies of the first element it touches.
      <h4>Empty </h4>
      Erases.
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
  );
};

export default Info;
