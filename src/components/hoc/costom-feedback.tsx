import { DataNoneIcon } from "@/assets/icons";
import { BouncingDotsLoader } from "../bouncing-dots-loader/bouncingDotsLoader";
import { IBasetListUser } from "@/types/user";

type TitleProps = {
    children: React.ReactNode;
};

function TitleCustomization({ children }: TitleProps) {
    return (
        <div className="flex flex-col justify-center items-center">
            <h5 className="title-feedback">{children}</h5>
            <BouncingDotsLoader />
        </div>
    );
}

function TitleNoneDataCustomization({ children }: TitleProps) {
    return (
        <div className={"container-nonedatafeedback"}>
            <h5 className="title-feedback">{children}</h5>
            <div className={"flex justify-center"}>
                <img
                    className="data-none-image"
                    src={DataNoneIcon}
                    alt="icondata-none"
                />
            </div>
        </div>
    );
}

export const customConditionalFeedbackHigh =
    (
        loadingFeedBack?: string,
        noDataFeedBack?: string,
        dataEmptyFeedback?: string,
    ) =>
    (Component: React.ComponentType<{ data: IBasetListUser }>) =>
    (props: { data: IBasetListUser }) => {
        const { data, isLoading } = props.data;

        if (isLoading)
            return (
                <TitleCustomization>
                    {loadingFeedBack ?? "Loading..."}
                </TitleCustomization>
            );
        if (!data)
            return (
                <TitleCustomization>
                    {noDataFeedBack ?? "No data feedback"}
                </TitleCustomization>
            );
        if (!data.length)
            return (
                <TitleNoneDataCustomization>
                    {dataEmptyFeedback ?? "Data is empty"}
                </TitleNoneDataCustomization>
            );
        return <Component {...props} />;
    };
