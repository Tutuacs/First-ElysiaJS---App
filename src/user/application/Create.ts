import { IHash } from "../../services/interfaces/IHash";
import { IUser } from "../domain/IUser";

export class CreateUser {
    constructor(
        private userRepository: IUser,
        private hash: IHash
    ) {}

    async run(email: string, password: string) {

        const exits = await this.userRepository.getByEmail(email);

        if (exits) {
            throw new Error("User already exists");
        }

        const hashedPass = this.hash.hash(password);
        return await this.userRepository.create(email, hashedPass);
    }

}