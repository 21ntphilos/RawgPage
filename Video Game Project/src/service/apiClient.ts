import axios from  'axios'


export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "12a4750d3d4b4aeba3c1431df989c1a5",
	},
});
