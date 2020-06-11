import config from './config.js';

import SteamService from './services/SteamService.js';
SteamService.init(config.services.steam_service.url);

export { SteamService };