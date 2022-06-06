export interface IUser {
    login: string;
    avatarUrl?: string
}

export type UserContextType = {
    user: IUser,
    saveUser: (user: IUser) => void
}