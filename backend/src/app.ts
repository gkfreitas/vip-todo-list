import * as cors from 'cors';
import * as express from 'express';
import MongoDB from './DB/conn';
import router from './routers';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.startDB();

    this.routes();

    this.app.get('/', (_req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private routes(): void {
    this.app.use(router)
  }

  public startDB() {
    new MongoDB();
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}
