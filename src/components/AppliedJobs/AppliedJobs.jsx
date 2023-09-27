
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplications } from "../utilities/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {

    const jobs = useLoaderData()

    const [jobsApplied, setJobsApplied] = useState([])

    useEffect(() => {
        const storedApplications = getStoredApplications()
        if (jobs.length > 0) {
            const applicationApplied = []
            for (const id of storedApplications) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    applicationApplied.push(job)
                }

            }
            setJobsApplied(applicationApplied)
        }
    }, [jobs])


    return (

        <div>

            <div className="text-center my-10">
                <h2 className="text-xl font-bold">Job Details</h2>
            </div>

            <div>
                <ul>
                    {
                        jobsApplied.map(appliedJob => <AppliedJob key={appliedJob.idx} appliedJob={appliedJob}></AppliedJob>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default AppliedJobs;