export interface IUser {
    uuid: string;
    title: string;
    first: string;
    last: string;
    fullname: string;
    username: string;
}

export interface IBasetListUser {
    data: IUser[];
    isLoading: boolean;
}
