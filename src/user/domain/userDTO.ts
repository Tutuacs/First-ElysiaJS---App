import { t } from "elysia"

export const CreateUserDto ={
    body: t.Object({
        email: t.String(),
        password: t.String(),
    })
}

export const LoginUserDto ={
    body: t.Object({
        email: t.String(),
        password: t.String(),
    })
}

