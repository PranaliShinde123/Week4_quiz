import React from "react";

function selectRandomFromList(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const RandomGen = () => {
  const arr = ["apple", "banana", "orange", "kiwi"];
  const randomValue = selectRandomFromList(arr);

  return (
    <div>
      <p>Random value from arr: {randomValue}</p>
    </div>
  );
};

export default RandomGen;
