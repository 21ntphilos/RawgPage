import useData from "./useData";

interface Plartform{
    id: number;
    name: string;
    slug:string;
}

const usePlatform = ()=> useData<Plartform>("/platforms/lists/parents");

export default usePlatform