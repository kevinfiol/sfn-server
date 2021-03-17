const polka = require('polka');
const cors = require('cors');
const UserController = require('../controllers/UserController.js');

const router = polka();

const routeCors = cors({ origin: '*' });

router.options('/getLibraryResult', routeCors);
router.options('/getCommonApps', routeCors);
router.options('/updateLibraryResult', routeCors);

// GET
router.get('/getAllSteamCategories', UserController.getAllSteamCategories);
router.get('/getAllProfiles/:identifier', UserController.getAllProfiles);

// POST
router.post('/getLibraryResult', routeCors, UserController.getLibraryResult);
router.post('/getCommonApps', routeCors, UserController.getCommonApps);
router.post('/updateLibraryResult', routeCors, UserController.updateLibraryResult);

module.exports = router;
