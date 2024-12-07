import { useEffect, useState } from "react";

const TextInput = () => {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    console.log(typed);
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
