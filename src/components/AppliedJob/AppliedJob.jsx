import { BiDollarCircle, BiLocationPlus } from 'react-icons/bi';
import PropTypes from 'prop-types';



const AppliedJob = ({ appliedJob }) => {

    const { logo, job_title, company_name, job_type, remote_or_onsite, location, salary } = appliedJob

    return (

        <div className='flex justify-between items-center border-2 border-gray-300 px-5 py-4 my-5'>
            <div className="flex items-center gap-8 ">
                <img className='w-28 h-5' src={logo} alt="Jobs" />
                <div>
                    <h2 className='text-xl font-bold'>{job_title}</h2>
                    <h3 className='text-lg font-semibold'>{company_name}</h3>

                    <div>

                        <button className='mr-3 btn-outline btn btn-primary'>{remote_or_onsite}</button>
                        <button className='mr-3 btn-outline btn btn-primary'>{job_type}</button>

                    </div>

                    <div className='flex justify-between gap-5'>

                        <h4 className='flex items-center gap-1'> <BiLocationPlus /><span className='font-bold'>Location:</span> {location}</h4>

                        <h3 className='flex items-center gap-1'>
                            <BiDollarCircle /> <span className='font-bold'>Salary:</span> {salary}</h3>
                    </div>
                </div>

            </div>
            <div>
                <button className='mr-3 btn-outline btn btn-primary'>View Details</button>
            </div>



        </div>
    );
};

AppliedJob.propTypes = {
    appliedJob: PropTypes.object.isRequired
}

export default AppliedJob;