import { useEffect, useMemo, useState } from "react";

const TextInput = ({ text }: { text: string }) => {
  const { words, totalWords } = useMemo(() => {
    const words = text.split(" ");
    const totalWords = words.length;
    return { words, totalWords };
  }, [text]);

  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const currentWord = words[index];

    console.log(index, currentWord);
    if (typed === " ") {
      setTyped("");
      return;
    }

    if (typed[currentWord.length] === " ") {
      setTyped("");
      setIndex((prev) => prev + 1);
      return;
    }
  }, [typed]);
  return (
    <input
      value={typed}
      onChange={(e) => setTyped(e.target.value)}
      autoFocus
      onPaste={(e) => e.preventDefault()}
      className="w-full border border-gray-200 rounded-sm p-[2px] text-lg focus:outline-none focus:border-black"
      type="text"
    />
  );
};

export default TextInput;
