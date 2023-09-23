import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError()
    console.log(error);

    return (
        <div className="max-w-screen-xl mx-auto my-10  px-2 md:px-16 lg:px-24 text-center flex flex-col justify-center">

            <h2>Oops!!</h2>
            {
                error.statusText || error.message
            }

            {
                error.status === 404 && <p>Go to Home!</p>
            }

            <Link to='/'>Home</Link>

        </div>
    );
};

export default ErrorPage;