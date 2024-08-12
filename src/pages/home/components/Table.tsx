interface TableProps {
    title: string[];
}

function Table({ title }: TableProps) {
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
                    <tr className="border border-teal-600 text-left">
                        <td className="border border-teal-600 px-1">Mr.</td>
                        <td className="border border-teal-600 px-1">
                            John Doe
                        </td>
                        <td className="border border-teal-600 px-1">Male</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;
