import { apiClient } from "@/lib/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

interface getUsersProps {
    page?: number;
    results?: number;
}

export const getUsers = async (params?: getUsersProps): Promise<any> => {
    const res = await apiClient.get(
        `?page=${params?.page}&results=${params?.results}`,
    );
    return res?.data;
};

type QueryFnType = typeof getUsers;

type GetUsersOptions = {
    params?: AxiosRequestConfig["params"];
    config?: QueryConfig<QueryFnType>;
};

export const useGetUsersOptions = ({ params, config }: GetUsersOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        onError: () => {},
        onSuccess: () => {},
        ...config,
        queryKey: ["users", params],
        queryFn: () => getUsers(params),
    });
};
