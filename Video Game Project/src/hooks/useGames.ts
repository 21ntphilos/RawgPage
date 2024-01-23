import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	rating: number;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

const useGames = (genre: Genre | null, platform: Platform | null) =>
	useData<Game>(
		"/games",
		{ params: { genres: genre?.id, platforms: platform?.id } },
		[genre?.id, platform?.id]
	);

export default useGames;
