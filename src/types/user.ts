export interface IUser {
    uuid: string;
    title: string;
    first: string;
    last: string;
    username: string;
}

export interface IBasetListUser {
    data: IUser[];
    isLoading: boolean;
}
