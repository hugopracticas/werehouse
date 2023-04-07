import { Request, Response } from 'express';
import { validDevice } from '../service/devices.services';
import { validateUser } from '../service/student.service';

export function validateStudent(req:Request, res: Response){
    console.log("body:", req.body );
    if( validateUser(req.body) ){
        res.status(200).send({
            status: "Students has succedded"
        });
    } else {
        res.status(200).send({
            status: "Students has failed"
        });
    }
}

export function defaultResponse(req:Request, res: Response){
    console.log("body:", req.body );
    res.status(200).send({
        status: "The App is normally running"
    });
}


/**Metodo Post */
export function addDevices(req: Request, res: Response){
    console.log("body:", req.body);
    if( validDevice( req.body ) ){
        res.status( 200 ).send({
            status: "Device has been added"
        })
    }else{
        res.status( 400 ).send({
            status: "Device has failed"
        })
    }   
}

/**Metodo Get */
export function deviceResponse( req:Request, res: Response){
    console.log("body:", req.body);
    res.status( 200 ).send({
        status: "Show all devices"
    })
}