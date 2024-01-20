import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";



interface Response <T> {
    count: number;
    results: T[];
}

const useData = <T>(url: string, reqConfig?:AxiosRequestConfig, dependencies?: unknown[]) => {


	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setLoading(true);

		apiClient
			.get<Response<T>>(url, { signal: controller.signal, ...reqConfig })
			.then((res) => {
				setData(res.data.results);
				setLoading(false);
			})
			.catch((error) => {
				if (error instanceof CanceledError) return;
				setError(error.message);
				setLoading(false);
			});
		return () => controller.abort();
	}, dependencies? [...dependencies] : []);
	return { data, error, isLoading };
};

export default useData;
