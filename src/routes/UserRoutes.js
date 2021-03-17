const polka = require('polka');
// const cors = require('cors');
const UserController = require('../controllers/UserController.js');

const router = polka();

// const routeCors = cors({ origin: '*' });

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
router.post('/getLibraryResult', cors, UserController.getLibraryResult);
router.post('/getCommonApps', cors, UserController.getCommonApps);
router.post('/updateLibraryResult', cors, UserController.updateLibraryResult);

module.exports = router;
