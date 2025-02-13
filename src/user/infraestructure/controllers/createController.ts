import { CreateUser } from "../../application/Create";

export class CreateUserController {
    constructor(private create: CreateUser) {}

    async run({body}: any) {
        try {
            const user = await this.create.run(body.email, body.password);
            return {
                status: 200,
                data: user
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