import React, { useState } from "react";
import Button from "./components/Button";

const arr1 = [
  {
    value: "1",
  },
  {
    value: "2",
  },
  {
    value: "3",
  },
];
const arr4 = [
  {
    value: "4",
  },
  {
    value: "5",
  },
  {
    value: "6",
  },
];
const arr7 = [
  {
    value: "7",
  },
  {
    value: "8",
  },
  {
    value: "9",
  },
];
const arrp = [
  {
    value: "+",
  },
  {
    value: "-",
  },
  {
    value: "/",
  },
];
const arrm = [
  {
    value: "*",
  },
  {
    value: "0",
  },
  {
    value: "=",
  },
];
const arrc = [
  {
    value: "clr",
  },
];

function App() {
  const [num, setNum] = useState("");

  const handleCal = (value) => {
    console.log("cli: ", value);
    if (value === "=") {
      setNum(eval(num));
    } else if (value === "clr") {
      setNum("");
    } else {
      setNum((pre) => pre + value);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="w-1/4 flex flex-col w-max pl-4 pr-4 h-max border-solid border-black border-2 rounded-lg bg-gray-600">
        <div className="flex justify-evenly pt-6 pb-2">
          <input
            type="text"
            value={num}
            className="border-black border-2 w-72 cursor-not-allowed bg-emerald-300 rounded-lg font-extrabold h-16 pl-4 pr-4 text-xl"
            disabled
          />
        </div>
        <div className="flex justify-evenly pt-4 pb-2">
          {arr1.map((button, index) => {
            return (
              <Button
                key={index}
                onClick={() => handleCal(button.value)}
                name={button.value}
                className="border-2 border-black border-solid w-10 bg-emerald-300 rounded-lg font-extrabold h-12 w-12"
              />
            );
          })}
        </div>
        <div className="flex justify-evenly pt-2 pb-2">
          {arr4.map((button, index) => {
            return (
              <Button
                key={index}
                onClick={() => handleCal(button.value)}
                name={button.value}
                className="border-2 border-black border-solid w-10 bg-emerald-300 rounded-lg font-extrabold h-12 w-12"
              />
            );
          })}
        </div>
        <div className="flex justify-evenly pt-2 pb-2">
          {arr7.map((button, index) => {
            return (
              <Button
                key={index}
                onClick={() => handleCal(button.value)}
                name={button.value}
                className="border-2 border-black border-solid w-10 bg-emerald-300 rounded-lg font-extrabold h-12 w-12"
              />
            );
          })}
        </div>
        <div className="flex justify-evenly pt-2 pb-2">
          {arrp.map((button, index) => {
            return (
              <Button
                key={index}
                onClick={() => handleCal(button.value)}
                name={button.value}
                className="border-2 border-black border-solid w-10 bg-emerald-300 rounded-lg font-extrabold h-12 w-12"
              />
            );
          })}
        </div>
        <div className="flex justify-evenly pt-2 pb-2">
          {arrm.map((button, index) => {
            return (
              <Button
                key={index}
                onClick={() => handleCal(button.value)}
                name={button.value}
                className="border-2 border-black border-solid w-10 bg-emerald-300 rounded-lg font-extrabold h-12 w-12"
              />
            );
          })}
        </div>
        <div className="flex justify-evenly pt-2 pb-2">
          {arrc.map((button, index) => {
            return (
              <Button
                key={index}
                onClick={() => handleCal(button.value)}
                name={button.value}
                className="border-2 border-black border-solid w-10 bg-emerald-300 rounded-lg font-extrabold "
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
