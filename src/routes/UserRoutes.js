const polka = require('polka');
// const cors = require('cors');
const UserController = require('../controllers/UserController.js');

const router = polka();

// const routeCors = cors({ origin: '*' });

const cors = (_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
};

router.use((req, _, next) => {
    if (req.method == 'OPTIONS' || req.method == 'options') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('ok');  
    } else {
        next();
    }
}); 

router.options('/getLibraryResult', cors);
router.options('/getCommonApps', cors);
router.options('/updateLibraryResult', cors);

// GET
router.get('/getAllSteamCategories', cors, UserController.getAllSteamCategories);
router.get('/getAllProfiles/:identifier', cors, UserController.getAllProfiles);

// POST
router.post('/getLibraryResult', cors, UserController.getLibraryResult);
router.post('/getCommonApps', cors, UserController.getCommonApps);
router.post('/updateLibraryResult', cors, UserController.updateLibraryResult);

module.exports = router;
