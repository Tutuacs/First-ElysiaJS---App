import { User } from "../domain/User";
import type { IUser } from "../domain/IUser";
import { PrismaClient } from "@prisma/client";

export class UserRepository implements IUser {
    private db: PrismaClient;

    constructor() {
        this.db = new PrismaClient();
    }

    async create(email: string, password: string): Promise<User> {
        const user = await this.db.user.create({
            data: {
                email: email,
                password: password
            }
        })
        
        return new User(user.id, user.email, user.password);
    }
    getById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async getByEmail(email: string): Promise<User | null> {
        const user = await this.db.user.findUnique({
            where: {
                email,
            }
        });

        if (!user) {
            return null;
        }

        return new User(user.id, user.email, user.password);
    }
    getAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    update(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
}