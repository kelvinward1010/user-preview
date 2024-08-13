import { IUser } from "@/types/user";

export function mapData(data: any[]): IUser[] {
    const mappedData: IUser[] = data?.map((user: any) => ({
        uuid: user.login.uuid,
        title: user.name.title,
        first: user.name.first,
        last: user.name.last,
        fullname: `${user.name.title}. ${user.name.first} ${user.name.last}`,
        username: `${user.login.username}`,
        thumbnail: `${user.picture.thumbnail}`,
    }));

    return mappedData;
}
