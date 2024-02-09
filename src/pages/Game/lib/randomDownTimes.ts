import { Letter } from "../components/Letters/types";

export const getRandomDownTimes = (min: number, max: number, arrayOfLetters: Array<Letter>): number[] => {
	return arrayOfLetters.map(() =>
		Math.round(Math.random() * (max - min) + min)
	);
};