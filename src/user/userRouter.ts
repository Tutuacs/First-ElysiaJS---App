import { Elysia, t} from "elysia";
import { createUserController, loginController } from "../server/dependencies";
import { CreateUserDto, LoginUserDto } from "./domain/userDTO";

export const userRouter = new Elysia({prefix: "/user"})
    .post("/", createUserController.run.bind(createUserController), CreateUserDto)
    .post("/login", loginController.run.bind(loginController), LoginUserDto)
    .get("/", () => "User list")