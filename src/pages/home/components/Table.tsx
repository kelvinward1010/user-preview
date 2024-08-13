import { IUser } from "@/types/user";

interface TableProps {
    title: string[];
    data: IUser[];
}

function Table({ title, data }: TableProps) {
    return (
        <div className="w-screen h-full flex justify-center mt-9">
            <table className="px-1">
                <thead>
                    <tr className="border border-teal-600 text-center bg-teal-700">
                        {title.map((i, idx) => (
                            <th
                                key={idx}
                                className="border font-medium border-teal-600 px-8 text-white"
                            >
                                {i}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="tablebodymain">
                    {data?.map((user: IUser, idx) => (
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
