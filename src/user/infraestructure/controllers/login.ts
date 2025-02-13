import { LoginUser } from "../../application/Login";

type Login = {
    body: {
        email: string,
        password: string
    }
    token: string
}

export class LoginController {
    constructor(
        private loginUser: LoginUser
    ){}

    async run({body}: Login) {
        try {

            const user = await this.loginUser.run(body.email, body.password);

            return {
                code: 200,
                user,
                message: "User logged in"
            }
        } catch (e) {
            const err = e as Error;

            return {
                status: 500,
                message: err.message
            }
        }
    }
}