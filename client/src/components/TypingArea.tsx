import TextInput from "./TextInput";

const TypingArea = () => {
  const text = "Here goes the text to be typed";
  return (
    <div className="bg-lighterGray space-y-4 px-2 py-5 border border-gray-300 rounded-md text-xl font-mono font-light">
      <div>
        <p>{text}</p>
      </div>

      <div>
        <TextInput text={text} />
      </div>
    </div>
  );
};

export default TypingArea;
