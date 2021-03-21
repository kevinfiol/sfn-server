const polka = require('polka');
const cors = require('cors');
const UserController = require('../controllers/UserController.js');

const router = polka();
router.use(cors());

// GET
router.get('/getAllSteamCategories', UserController.getAllSteamCategories);
router.get('/getAllProfiles/:identifier', UserController.getAllProfiles);

// POST
router.post('/getLibraryResult', UserController.getLibraryResult);
router.post('/getCommonApps', UserController.getCommonApps);
router.post('/updateLibraryResult', UserController.updateLibraryResult);

module.exports = router;