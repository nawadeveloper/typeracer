import RaceOn from "./components/RaceOn";
import RaceTrack from "./components/RaceTrack";
import Result from "./components/Result";
import TypingArea from "./components/TypingArea";
import { useTypingStore } from "./stores/useTypingStore";

const App = () => {
  const raceCompleted = useTypingStore((state) => state.raceCompleted);
  return (
    <div className="bg-lightGray grid justify-center items-start pt-20 min-h-screen">
      <div className="w-[800px] p-10 space-y-6 rounded-md bg-white drop-shadow-xl">
        <RaceOn />

        <RaceTrack />

        {!raceCompleted ? <TypingArea /> : <Result />}
      </div>
    </div>
  );
};

export default App;
