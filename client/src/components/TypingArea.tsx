import TextInput from "./TextInput";

const TypingArea = () => {
  return (
    <div className="bg-lighterGray space-y-4 px-2 py-5 border border-gray-300 rounded-md text-xl font-mono font-light">
      <div>
        <p>Here goest the text to be typed</p>
      </div>

      <div>
        <TextInput />
      </div>
    </div>
  );
};

export default TypingArea;
