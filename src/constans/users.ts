export interface NewUser {
    username: string,
    password: string
}

export const users = [
    {
        "user": "admin",
        "password": "123456789",
        "name": "Иван Иванов",
        "role":"ADMIN"
    },
    {
        "user": "user",
        "password": "123456789",
        "name": "Петр Петров",
        "role":"USER"
    }
]