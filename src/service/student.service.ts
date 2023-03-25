import { Student } from '../model/student.model';


export function validateUser(input: Student){
    return input.grade >= 6;
}