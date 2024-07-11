import { useRouteError } from "react-router-dom";
import  errorImage  from "../../assets/404.svg";
import style from "./ErrorPage.module.scss";
const ErrorPage = () => {
    const error = useRouteError();
    console.log("error ", error);
    return (
        <div className={style['error-page']}>
            {error.status === 404 ? (
                <div class="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
                    <div class="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
                        <p class="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider ">404</p>
                        <p class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider  mt-2">C'est ici que de grandes choses ne se passent pas...</p>
                        <p class="text-lg md:text-xl lg:text-2xl  my-12">On risque d'avoir faim en restant ici...</p>
                        <a href="/" class="flex items-center space-x-2  hover:bg-blue-700 text-gray-100 px-4 py-2 rounded transition duration-150" title="Return Home">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Se régaler</span>
                        </a>
                    </div>
                    <div class="w-1/2 lg:h-full flex lg:items-end justify-center p-4">
                        <img src={errorImage} alt="404" class="w-full h-auto" />
                    </div>
                </div>
            ) : (
                <>
                    <h1>Erreur {error.status}</h1>
                    <p>{error.message}</p>
                </>
            )}
        </div>
    );
};

export default ErrorPage;