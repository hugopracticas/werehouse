import { Request, Response } from 'express';
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