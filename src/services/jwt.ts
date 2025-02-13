import { IJwt } from "./interfaces/IJwt";
import jwt from 'jsonwebtoken';

export class Jwt implements IJwt {
    sign(payload: string): string {
        return jwt.sign({data: payload}, 'secret', {expiresIn: '1h'});
    }

    verify(token: string): string {
        return jwt.verify(token, 'secret') as string;
    }

}