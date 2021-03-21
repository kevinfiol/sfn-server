const polka = require('polka');
const cors = require('cors');
const UserController = require('../controllers/UserController.js');

// opts
const corsOpts = {
    origin: '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    optionsSuccessStatus: 200
};

const router = polka();
router.use(cors(corsOpts));

// GET
router.get('/getAllSteamCategories', UserController.getAllSteamCategories);
router.get('/getAllProfiles/:identifier', UserController.getAllProfiles);

// POST
router.post('/getLibraryResult', UserController.getLibraryResult);
router.post('/getCommonApps', UserController.getCommonApps);
router.post('/updateLibraryResult', UserController.updateLibraryResult);

module.exports = router;