import { useEffect, useMemo, useState } from "react";

const TextInput = ({ text }: { text: string }) => {
  const { words, totalWords } = useMemo(() => {
    const words = text.split(" ");
    const totalWords = words.length;
    return { words, totalWords };
  }, [text]);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    console.log(words, totalWords);
    if (typed === " ") {
      setTyped("");
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
