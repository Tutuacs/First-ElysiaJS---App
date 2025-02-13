import { CreateUserController } from "../user/infraestructure/controllers/createController";
import { UserRepository } from "../user/infraestructure/UserRepository";
import { CreateUser } from "../user/application/Create";
import { Hash } from "../services/hash";
import { LoginUser } from "../user/application/Login";
import { LoginController } from "../user/infraestructure/controllers/login";
import { Jwt } from "../services/jwt";

const hashService = new Hash();
const userRepository = new UserRepository();
const jwtService = new Jwt();

const createUser = new CreateUser(userRepository, hashService);
export const createUserController = new CreateUserController(createUser);

const loginUser = new LoginUser(userRepository, hashService, jwtService);
export const loginController = new LoginController(loginUser);