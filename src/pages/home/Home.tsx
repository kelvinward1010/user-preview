import { useGetUsersOptions } from "@/services/user/get-user.service";
import Table from "./components/Table";

export function Home() {
    const titleInTable = ["Title", "Name", "Gender", "Actions"];

    const queryFN = {
        page: 1,
        results: 10,
    };

    const { data, isLoading } = useGetUsersOptions({ params: queryFN });
    console.log(data);

    return (
        <div>
            <h1 className="text-center text-3xl font-bold underline">
                Table preview user!
            </h1>
            <Table title={titleInTable} />
        </div>
    );
}
