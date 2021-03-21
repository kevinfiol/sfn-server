const NanoID = require('../utils/NanoID.js');
const { LibraryService, SteamService } = require('../container.js');

exports.getAllSteamCategories = async function(_, res) {
    try {
        const categories = await SteamService.getAllSteamCategories();
        res.send(200, categories);
    } catch(e) {
        throw new Error('Could not retrieve Steam categories from Steam Service.');
    }
};

exports.getAllProfiles = async function(req, res) {
    const identifier = req.params.identifier;

    try {
        const profiles = await SteamService.getAllProfiles(identifier);
        res.send(200, profiles);
    } catch(e) {
        throw new Error('Could not retrieve profiles from Steam Service.');
    }
};

// 76561197978726907/76561197978726907,76561197961592646,76561197962363601,76561197963689509
exports.getCommonApps = async function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const profiles = req.body.profiles;
    if (!profiles) throw new Error('Invalid profiles object in POST body');
    const idString = profiles.steamids.sort().join(',');

    // check if exists
    let libraryResult;
    libraryResult = await LibraryService.getOneByProps({ idString });

    // get categories
    const categories = await SteamService.getAllSteamCategories();

    if (libraryResult !== undefined) {
        res.send(200, { libraryResult, categories });
    } else {
        try {
            const steamapps = await SteamService.getCommonApps(idString);
            const nanoid = NanoID.gen();

            libraryResult = await LibraryService.addAndFetch({
                nanoid: nanoid,
                idString: idString,
                profiles: JSON.stringify(profiles),
                steamapps: JSON.stringify(steamapps)
            });

            res.send(200, { libraryResult, categories });
        } catch(e) {
            throw new Error('Error retrieving common apps: ' + e.message);
        }
    }
};

exports.getLibraryResult = async function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const nanoid = req.body.nanoid;

    try {
        const libraryResult = await LibraryService.getOneByProps({ nanoid });

        if (libraryResult !== undefined) {
            const categories = await SteamService.getAllSteamCategories();
            res.send(200, { libraryResult, categories });
        } else {
            throw new Error('ID not found.');
        }
    } catch(e) {
        throw new Error('Error retrieiving library result: ' + e.message);
    }
};

exports.updateLibraryResult = async function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const nanoid = req.body.nanoid;
    if (!nanoid) throw new Error('Invalid nanoid received in POST body');

    // check if exists
    let libraryResult;
    libraryResult = await LibraryService.getOneByProps({ nanoid });
    if (libraryResult === undefined) throw new Error('Library Result for given nanoid does not exist');

    try {
        const steamapps = await SteamService.getCommonApps(libraryResult.idString);
        const updatedLibraryResult = await libraryResult.$query().patchAndFetch({ steamapps: JSON.stringify(steamapps) });
        const categories = await SteamService.getAllSteamCategories()
        res.send(200, { libraryResult: updatedLibraryResult, categories });
    } catch(e) {
        throw new Error('Error updating library result: ' + e.message);
    }
};
