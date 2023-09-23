import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError()
    console.log(error);

    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate('/')
    }

    return (
        <div className="max-w-screen-xl mx-auto my-10  px-2 md:px-16 lg:px-24 text-center flex flex-col justify-center ">

            <h2>Oops!!</h2>
            {
                error.statusText || error.message
            }

            {
                error.status === 404 && <p>Go to Home!</p>
            }

            <div className="mx-auto mt-3">
                <button onClick={handleGoHome} className='mr-3 btn-outline btn btn-primary w-40'>Go Home</button>
            </div>

        </div>
    );
};

export default ErrorPage;