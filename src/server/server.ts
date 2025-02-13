import { Elysia } from "elysia";
import { userRouter } from "../user/userRouter";
import { swagger } from '@elysiajs/swagger'

export class Server {
    private app: Elysia;

    constructor() {
        this.app = new Elysia();
        this.app.use(swagger())
        this.app.derive(({headers}) => {
            const auth = headers['authorization']

            return {
                token: auth?.startsWith('Bearer ') ? auth.split('Bearer ')[1] : null
            }

        })
        this.app.group("/api/v1", (app) =>
            app.use(userRouter)
        )
    }

    public run() {
        this.app.listen(process.env.PORT || 3000, () => {
            console.log(
                `🦊 Elysia server is running at localhost:${this.app.server?.port}`
            );
        });
    }
}