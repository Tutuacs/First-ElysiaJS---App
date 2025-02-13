import { User } from "./User";

export interface IUser {
    create(email: string, password: string): Promise<User>;
    getById(id: string): Promise<User | null>;
    getByEmail(email: string): Promise<User | null>;
    getAll(): Promise<User[]>;
    update(user: User): Promise<User>;
    delete(id: string): Promise<User>;
}