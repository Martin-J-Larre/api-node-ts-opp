import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

class Server {
    public app: express.Application = express();
    private port: number = 5000;

    constructor() {
        this.listen()
    }
    public listen() {
        this.app.listen(this.port, ()=> {
            console.log(`Server is listening on port http://localhost:${this.port}`);
            
        })
    }
}

new Server();