const TextToBeType = ({ text }: { text: string }) => {
  return (
    <p>
      {text.split("").map((char, i) => (
        <span key={char + i}>{char}</span>
      ))}
    </p>
  );
};

export default TextToBeType;
