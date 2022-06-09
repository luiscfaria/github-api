export interface IUser {
    login: string;
    name?: string;
    avatarUrl?: string
    error?: boolean
}

export type UserContextType = {
    user: IUser,
    saveUser: (user: IUser) => void
    handleError: (error: boolean) => void
}