import { IHash } from "../../services/interfaces/IHash";
import { IJwt } from "../../services/interfaces/IJwt";
import { IUser } from "../domain/IUser";

export class LoginUser {
    constructor(
        private userRepository: IUser,
        private hash: IHash,
        private jwt: IJwt,
    ){}

    async run(email: string, password: string) {
        const user = await this.userRepository.getByEmail(email);

        if (!user) {
            throw new Error("User not found");
        }

        const isValid = this.hash.compare(password, user.password);

        if (!isValid) {
            throw new Error("Invalid password");
        }

        const token = this.jwt.sign(user.id);
        user.setToken(token);

        return user;
    }
}