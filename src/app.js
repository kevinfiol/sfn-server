const polka = require('polka');
const send = require('@polka/send-type');
const parse = require('@polka/parse');
const helmet = require('helmet');
// const cors = require('cors');

const app = polka();
// app.use(cors({ origin: '*' }));

const cors = (_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
};
app.use(cors);

// middleware
app.use(helmet());
app.use(parse.json());
app.use((_, res, next) => {
    res.send = send.bind(null, res);
    next();
});

// routes
const IndexRoutes = require('./routes/IndexRoutes.js');
const UserRoutes = require('./routes/UserRoutes.js');

app.use('/user', UserRoutes);
app.use('/', IndexRoutes);

module.exports = app;
