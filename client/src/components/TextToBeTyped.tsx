import { useState } from "react";

const TextToBeType = ({ text }: { text: string }) => {
  const [mark, setMark] = useState({ correctlyTyped: 10, totalCharTyped: 14 });
  return (
    <p>
      {text.split("").map((char, i) => {
        const textColor = i < mark.correctlyTyped ? "text-green-500" : "";
        const bgColor =
          i >= mark.correctlyTyped && i < mark.totalCharTyped
            ? "bg-red-300"
            : "";

        return (
          <span className={`${textColor} ${bgColor}`} key={char + i}>
            {char}
          </span>
        );
      })}
    </p>
  );
};

export default TextToBeType;
