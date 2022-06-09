export interface IUser {
    login: string;
    name?: string;
    avatarUrl?: string;
    bio?: string
    error?: boolean;
    repos?: number;
    followers?: number;
    following?: number;
    github?: string;
    twitter?: string;
    location?: string;
    company?: string;
}

export type UserContextType = {
    user: IUser,
    saveUser: (user: IUser) => void
    handleError: (error: boolean) => void
}