import Request from '../utils/Request.js';

const SteamService = {
    init(url) {
        this.url = url;
    },

    async getSteamID(identifier) {
        const endpoint = `${this.url}/app/getSteamID`;

        try {
            const response = await Request.get(endpoint, { identifier });
            const json = await response.json();
            return json.steamid;
        } catch(e) {
            throw e;
        }
    }
};

export default SteamService;