

export interface IUserRequest {
    username: string
    password: string
    isAdm: boolean
}

export interface IUserResponse {
    id: string
    username: string
    isAdm: boolean
    createdAt: Date
    updatedAt: Date
}

export interface IUserLogin {
    username: string
    password: string
}

export const IUserKeys = {
    username: "string",
    password: "string",
    isAdm: false
}