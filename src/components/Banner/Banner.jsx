

const Banner = () => {
    return (

        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse px-10">
                <img src="../../../public/user.png" className="md:w-[50%]  rounded-lg" />
                <div className="w-[70%]">
                    <h1 className="text-5xl font-bold">One Step <br /> Closer To <br /> Your Dream Job!</h1>
                    <p className="py-6">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;