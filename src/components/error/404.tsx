import { layoutUrl } from "@/routes/urls";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

export function Error404() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate(layoutUrl);
    };

    return (
        <div
            className={
                "w-full h-screen gap-3 flex justify-center flex-col items-center"
            }
        >
            <h2 className={"text-lg font-medium"}>Erorr 404</h2>
            <p>This page not found</p>
            <Button onClick={handleGoHome} lable="Go home" />
        </div>
    );
}
