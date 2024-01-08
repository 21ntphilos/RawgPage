import { useEffect, useState } from 'react'
import apiClient from '../service/apiClient';
import { CanceledError } from 'axios';

export interface Platform{
	id:number,
	name:string,
	slug:string,
}

export interface Game {
	id: number;
	name: string;
	rating: number;
	background_image: string;
	parent_platforms: {platform:Platform}[]
}

interface Response {
	count: number;
	results: Game[];
}
const useGames = () => {
     const [games, setGames] = useState<Game[]>([]);
			const [error, setError] = useState("");

			useEffect(() => {
                const controller = new AbortController()
				apiClient
					.get<Response>("/games", {signal:controller.signal})
					.then((res) => setGames(res.data.results))
					.catch((error) => {
                        if(error instanceof CanceledError)return  
                        setError(error.message)});
                    return ()=> controller.abort()
			},[]);
  return {games, error}
  
  
}

export default useGames