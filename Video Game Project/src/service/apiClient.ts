import axios from  'axios'

const{ KEY } = process.env
export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: KEY!,
	},
});
