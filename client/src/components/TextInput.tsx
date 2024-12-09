import { useEffect, useMemo, useState } from "react";

type TypingError =
  | {
      state: false;
    }
  | {
      state: true;
      at: number;
    };

const TextInput = ({ text }: { text: string }) => {
  const { words, totalWords } = useMemo(() => {
    const words = text.split(" ");
    const totalWords = words.length;
    return { words, totalWords };
  }, [text]);

  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [error, setError] = useState<TypingError>({ state: false });

  useEffect(() => {
    if (index >= totalWords) {
      return;
    }
    const currentWord = words[index];
    const typedLength = typed.length;

    if (typed === " ") {
      setTyped("");
      return;
    }

    if (error.state) {
      if (error.at >= typedLength) {
        setError({ state: false });
      }

      return;
    }

    if (index === totalWords - 1) {
      if (
        currentWord[currentWord.length - 1] === typed[currentWord.length - 1]
      ) {
        setTyped("");
        setIndex((prev) => prev + 1);
        console.log("race is complete.");
        return;
      }
    }

    if (typed[currentWord.length] === " ") {
      setTyped("");
      setIndex((prev) => prev + 1);
      return;
    }

    if (typed[typedLength - 1] !== currentWord[typedLength - 1]) {
      setError({ state: true, at: typedLength - 1 });
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
