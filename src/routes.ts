import { Express, Request, Response } from "express";
import { validateStudent, defaultResponse, addDevices } from './controller/student.controller';

function routes(app: Express){
    app.get('/', defaultResponse );
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200) );
    app.post('/students', validateStudent);

    app.post('/addDevice', addDevices);
}

export default routes;