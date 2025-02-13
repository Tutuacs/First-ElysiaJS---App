import bcrypt from 'bcrypt';
import type { IHash } from './interfaces/IHash';

export class Hash implements IHash {
    hash(password: string): string {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    compare(password: string, hash: string): boolean {
        return bcrypt.compareSync(password, hash);
    }
}