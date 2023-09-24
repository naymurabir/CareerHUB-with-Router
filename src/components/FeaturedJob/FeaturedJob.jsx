import PropTypes from 'prop-types';
import { BiDollarCircle, BiLocationPlus } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';


const FeaturedJob = ({ job }) => {

    const { id, logo, job_title, company_name, job_type, remote_or_onsite, location, salary } = job

    const navigate = useNavigate()

    const handleJobDetails = () => {
        navigate(`/job/${id}`)
    }


    return (
        <div className="card bg-base-100 shadow-xl border-2 border-gray-200 px-5 py-6 space-y-2 flex flex-col">

            <img className='w-28 h-18' src={logo} alt="Jobs" />
            <h2 className='text-xl font-bold'>{job_title}</h2>
            <h3 className='text-lg font-semibold'>{company_name}</h3>

            <div>

                <button className='mr-3 btn-outline btn btn-primary'>{remote_or_onsite}</button>
                <button className='mr-3 btn-outline btn btn-primary'>{job_type}</button>

            </div>

            <div className='flex justify-between flex-grow'>

                <h4 className='flex items-center gap-1'> <BiLocationPlus /><span className='font-bold'></span> {location}</h4>

                <h3 className='flex items-center gap-1'>
                    <BiDollarCircle /> <span className='font-bold'></span> {salary}</h3>
            </div>

            <button onClick={handleJobDetails} className='mr-3 btn-outline btn btn-primary w-40'>Show Details</button>
        </div>

    );
};

FeaturedJob.propTypes = {
    job: PropTypes.object.isRequired
}

export default FeaturedJob;