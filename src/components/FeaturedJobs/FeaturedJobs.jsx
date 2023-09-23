import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])

    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(response => response.json())
            .then(data => setJobs(data))

    }, [])

    return (
        <div>
            <div className="text-center mt-5">
                <h2 className="text-2xl font-bold">Featured Jobs page.</h2>
                <p className="text-sm mt-1">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
                {
                    jobs.slice(0, dataLength).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>

            <div className={`text-center mb-2 ${dataLength == jobs.length ? 'hidden' : ''}`}>
                <button onClick={() => setDataLength(jobs.length)} className="btn-outline btn btn-primary ">Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;