import { IUser } from "@/types/user";
import { useEffect, useState } from "react";
import { sortByFullName, sortByUsername } from "../utils";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

interface TableProps {
    title: string[];
    data: IUser[];
}

function Table({ title, data }: TableProps) {
    const [users, setUsers] = useState<IUser[]>(data);
    const [sortConfig, setSortConfig] = useState<{
        key: string;
        direction: "asc" | "desc";
    }>({ key: "fullname", direction: "asc" });

    useEffect(() => {
        let sortedUsers = [...users];
        if (sortConfig.key === "fullname") {
            sortedUsers = sortByFullName(sortedUsers, sortConfig.direction);
        } else if (sortConfig.key === "username") {
            sortedUsers = sortByUsername(sortedUsers, sortConfig.direction);
        }
        setUsers(sortedUsers);
    }, [sortConfig]);

    const requestSort = (key: string) => {
        let direction: "asc" | "desc" = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });
    };

    return (
        <div className="w-screen h-full flex justify-center mt-9">
            <table className="px-1">
                <thead>
                    <tr className="border border-teal-600 text-center bg-teal-700">
                        {title.map((i, idx) => {
                            if (i === "Fullname") {
                                return (
                                    <th
                                        key={idx}
                                        onClick={() => requestSort("fullname")}
                                        className="cursor-pointer border font-medium border-teal-600 px-8 text-white"
                                    >
                                        <div className="w-fit flex justify-center items-center">
                                            {i}
                                            {sortConfig.direction === "desc" &&
                                            sortConfig.key === "fullname" ? (
                                                <IconChevronUp />
                                            ) : (
                                                <IconChevronDown />
                                            )}
                                        </div>
                                    </th>
                                );
                            }
                            if (i === "Username") {
                                return (
                                    <th
                                        key={idx}
                                        onClick={() => requestSort("username")}
                                        className="cursor-pointer border font-medium border-teal-600 px-8 text-white"
                                    >
                                        <div className="w-fit flex justify-center items-center">
                                            {i}
                                            {sortConfig.direction === "desc" &&
                                            sortConfig.key === "username" ? (
                                                <IconChevronUp />
                                            ) : (
                                                <IconChevronDown />
                                            )}
                                        </div>
                                    </th>
                                );
                            }
                            return (
                                <th
                                    key={idx}
                                    className="border font-medium border-teal-600 px-8 text-white"
                                >
                                    {i}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody className="tablebodymain">
                    {users?.map((user: IUser, idx) => (
                        <tr
                            key={idx}
                            className="border border-teal-600 text-left"
                        >
                            <td className="border w-auto border-teal-600 px-1">
                                {user?.title}
                            </td>
                            <td className="border w-auto border-teal-600 px-1">
                                {user?.first}
                            </td>
                            <td className="border w-auto border-teal-600 px-1">
                                {user?.last}
                            </td>
                            <td className="border w-auto border-teal-600 px-1">
                                {user?.fullname}
                            </td>
                            <td className="border w-auto border-teal-600 px-1">
                                {user?.username}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
