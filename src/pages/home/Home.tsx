import { useGetUsersOptions } from "@/services/user/get-user.service";
import { mapData } from "@/utils/data";
import { Pagination } from "./components/Panigation";
import { useSearchParams } from "react-router-dom";

export function Home() {
    const [pageParams, __] = useSearchParams();
    const keysSearchOnParams = Number(pageParams.get("pageNumber"));
    const titleInTable = [
        "Title",
        "First",
        "Last",
        "Fullname",
        "Username",
        "Thumbnail",
    ];

    const { data, isLoading } = useGetUsersOptions({
        params: {
            page: keysSearchOnParams <= 1 ? 1 : keysSearchOnParams,
            results: 10,
        },
    });

    return (
        <div>
            <h1 className="text-center text-3xl font-bold underline">
                Table preview user!
            </h1>
            <Pagination
                titleInTable={titleInTable}
                data={mapData(data?.results)}
                isLoading={isLoading}
            />
        </div>
    );
}
