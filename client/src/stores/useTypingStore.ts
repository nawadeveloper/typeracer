import { create } from "zustand";
import textData from "../assets/data/textData";
import getText from "../utils/getText";

type TypingStore = {
    text: string;
    raceCompleted: boolean;
    raceOver: () => void;
    startNewRace: () => void;
};

export const useTypingStore = create<TypingStore>()((set) => ({
    text: getText(textData),
    raceCompleted: false,

    raceOver: () => set({ raceCompleted: true }),

    startNewRace: () => set({ text: getText(textData), raceCompleted: false }),
}));