import { useLoaderData, useParams } from "react-router-dom";
import { saveApplicationToLocalStorage } from "../utilities/localStorage";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const JobsDetails = () => {

    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)

    const job = jobs.find(job => job.id === idInt)

    const {
        job_description,
        job_responsibility,
        educational_requirements,
        experiences,
        salary,
        job_title,

    } = job

    const handleApplyApplication = (id) => {
        toast("Application added successfully! ")
        saveApplicationToLocalStorage(id)
    }


    return (


        <div>
            <div className="text-center my-10">
                <h2 className="text-xl font-bold">Job Details</h2>
            </div>
            <div className="mx-auto px-2 md:px-10 lg:px-10 grid grid-cols-1 md:grid-cols-6 gap-5 my-8">

                <div className="col-span-4 p-5 bg-gray-200 rounded-md">
                    <h2 className="text-sm"> <span className="font-bold text-lg">Job Description: </span> {job_description} </h2>
                    <h3 className="text-sm mt-3"> <span className="font-bold text-lg">Job Responsibility: </span> {job_responsibility} </h3>

                    <h3 className="font-bold text-lg mt-3">Educational Requirements: </h3>
                    <p className="text-sm mt-3"> {educational_requirements} </p>

                    <h3 className="font-bold text-lg mt-3">Experiences:</h3>
                    <p className="text-sm mt-3"> {experiences}</p>
                </div>

                <div className="col-span-2 p-5 rounded-md bg-gray-200 ">
                    <h3 className="font-bold text-lg">Job Details</h3>
                    <hr />

                    <h3 className="text-sm mt-3"><span className="font-bold text-lg">Salary:</span> {salary} (Per Month)</h3>
                    <h3 className="text-sm mt-1"><span className="font-bold text-lg">Job Title:</span> {job_title}</h3>

                    <h3 className="font-bold text-xl my-2">Contact Information</h3>
                    <hr />

                    <h3 className="text-sm mt-1"><span className="font-bold text-lg">Phone:</span> {job.contact_information.phone}</h3>
                    <h3 className="text-sm mt-1"><span className="font-bold text-lg">Email:</span> {job.contact_information.email}</h3>
                    <h3 className="text-sm mt-1"><span className="font-bold text-lg">Address:</span> {job.contact_information.address}</h3>

                    <button onClick={() => { handleApplyApplication(id) }} className='mr-3 btn-outline btn btn-primary w-full mt-3'>Apply Now</button>

                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobsDetails;