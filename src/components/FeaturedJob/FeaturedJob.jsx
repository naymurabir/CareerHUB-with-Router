import PropTypes from 'prop-types';
import { BiDollarCircle, BiLocationPlus } from 'react-icons/bi';


const FeaturedJob = ({ job }) => {

    const { logo, job_title, company_name, job_type, location, salary } = job

    return (
        <div className="card bg-base-100 shadow-xl border-2 border-gray-200 px-5 py-6 space-y-2">

            <img className='w-24 h-18' src={logo} alt="Jobs" />
            <h2 className='text-xl font-bold'>{job_title}</h2>
            <h3 className='text-lg font-semibold'>{company_name}</h3>
            <h4>{job_type}</h4>

            <div className='flex justify-between'>

                <h4 className='flex items-center gap-1'> <BiLocationPlus />Location: {location}</h4>

                <h3 className='flex items-center gap-1'>
                    <BiDollarCircle /> Salary: {salary}</h3>

            </div>
        </div>

    );
};

FeaturedJob.propTypes = {
    job: PropTypes.object.isRequired
}

export default FeaturedJob;