const express = require('express');const app = express();
const http = require(http);
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const server = http.createServer(app);

class Server {

    constructor(routes) {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(routes);
        this.server = http.createServer(app);
    }

    startServer() {
        try {
            await mongoose.connect(url, {useNewUrlParser: true});
            server.listen(5000, () => console.log('listening on port 5000'));
        } catch (err) {
            console.error(err)
        }
    }
}

module.exports = Server;