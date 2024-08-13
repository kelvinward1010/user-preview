import { IUser } from "@/types/user";
import React from "react";
import Table from "./Table";
import { customConditionalFeedbackHigh } from "@/components/hoc/costom-feedback";
import Button from "@/components/Button";
import { useSearchParams } from "react-router-dom";

interface PaginationProps {
    data: IUser[];
    titleInTable: string[];
    isLoading?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
    data = [],
    titleInTable,
    isLoading = false,
}) => {
    const [pageParams, setPageParams] = useSearchParams();
    const totalPages = Math.ceil(100 / 10);
    const keysPgaes = Number(pageParams.get("pageNumber"));

    const goToPage = (page: number) => {
        let currentPage = Math.max(1, Math.min(page, totalPages));
        pageParams.set("pageNumber", String(currentPage));
        setPageParams(pageParams);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`px-1 py-1 rounded border border-teal-600 ${keysPgaes === i ? "text-teal-50 bg-teal-600 " : "text-black"}`}
                >
                    {i}
                </button>,
            );
        }
        return pageNumbers;
    };

    const BaseList = () => {
        return <Table data={data} title={titleInTable} />;
    };

    const draftData = {
        isLoading: isLoading,
        data: data,
    };
    const ListPost = customConditionalFeedbackHigh()(BaseList);

    return (
        <div>
            <ListPost data={draftData} />
            <div className="flex justify-center gap-2 items-center mt-2">
                <Button
                    onClick={() => goToPage(keysPgaes - 1)}
                    className="cursor-pointer"
                    disabled={keysPgaes === totalPages}
                    lable="Previous"
                />
                {renderPageNumbers()}
                <Button
                    onClick={() => goToPage(keysPgaes + 1)}
                    className="cursor-pointer"
                    disabled={keysPgaes === totalPages}
                    lable="Next"
                />
            </div>
        </div>
    );
};
