import express, { Application } from 'express';
// require('dotenv').config();
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import compression from 'compression';

export class App {
    app: Application;
    server;
    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.onInit();
    }
    async onInit() {
        const port = process.env.PORT || 3007;
        this.app.use(cors());
        this.app.use(compression());
        this.app.get('/', async (req, res) => {
            res.send('<h3>E-blog<h3>');
        });
        this.app.listen(port, () => {
            console.log(`Port is running on ${port}`);
        });
        this.app.use(express.json({ limit: '50mb' }));
        this.app.use(express.urlencoded({ limit: '50mb', extended: true }));
    }
}
export let app = new App();