const config = require('../config.js');

const SteamService = require('./services/SteamService.js');
SteamService.init(config.services.steam_service.url);

const LibraryService = require('./services/LibraryService.js');
const LibraryResult = require('./models/LibraryResult.js');
LibraryService.init(LibraryResult);

module.exports = { SteamService, LibraryService };