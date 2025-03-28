import genres from "../data/genre"

export interface Genre {
	id: string;
	name: string;
	image_background:string;
}

const useGenre =()=> ({data:genres, isLoading: false , error:null})

export default useGenre;
