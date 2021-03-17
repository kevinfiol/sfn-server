const polka = require('polka');
const UserController = require('../controllers/UserController.js');

const router = polka();

router.post('*', (_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
});

// router.options('*', (_, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*"); 
//     res.setHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//     res.statusCode = 200;
//     res.end('ok');
// });

// GET
router.get('/getAllSteamCategories', UserController.getAllSteamCategories);
router.get('/getAllProfiles/:identifier', UserController.getAllProfiles);

// POST
router.post('/getLibraryResult', UserController.getLibraryResult);
router.post('/getCommonApps', UserController.getCommonApps);
router.post('/updateLibraryResult', UserController.updateLibraryResult);

module.exports = router;
