import useData from "./useData";

interface Genre {
    id:string;
    name:string;
}

const useGenre =()=> useData<Genre>("/genres")

export default useGenre;
