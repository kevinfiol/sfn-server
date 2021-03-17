const polka = require('polka');
const UserController = require('../controllers/UserController.js');

const router = polka();

const cors = (_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};

router.options('/getLibraryResult', cors);
router.options('/getCommonApps', cors);
router.options('/updateLibraryResult', cors);

// GET
router.get('/getAllSteamCategories', UserController.getAllSteamCategories);
router.get('/getAllProfiles/:identifier', UserController.getAllProfiles);

// POST
router.post('/getLibraryResult', UserController.getLibraryResult);
router.post('/getCommonApps', UserController.getCommonApps);
router.post('/updateLibraryResult', UserController.updateLibraryResult);

module.exports = router;
