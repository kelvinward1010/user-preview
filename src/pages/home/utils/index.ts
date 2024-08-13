import { IUser } from "@/types/user";

export const sortByFullName = (
    data: IUser[],
    direction: "asc" | "desc" = "asc",
) => {
    return data.sort((a, b) => {
        if (a.fullname < b.fullname) {
            return direction === "asc" ? -1 : 1;
        }
        if (a.fullname > b.fullname) {
            return direction === "asc" ? 1 : -1;
        }
        return 0;
    });
};

export const sortByUsername = (
    data: IUser[],
    direction: "asc" | "desc" = "asc",
) => {
    return data.sort((a, b) => {
        if (a.username < b.username) {
            return direction === "asc" ? -1 : 1;
        }
        if (a.username > b.username) {
            return direction === "asc" ? 1 : -1;
        }
        return 0;
    });
};
