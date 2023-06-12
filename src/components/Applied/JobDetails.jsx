import { MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const JobDetails = ({ pd }) => {
    const {id, image, jobTitle, remote, fulltime, location, salary } = pd;
    return (
        <div>
            <div className="flex mt-8 border-2 rounded p-6 mb-12 justify-between">
                <div className="flex" >
                    <img className='bg-slate-100 p-8' style={{ width: '140px' }} src={image} alt="" />
                    <div className="ml-4">
                        <h2 className="text-2xl">{jobTitle}</h2>
                        <div className="flex">
                            <p className="border-2 px-2 text-sky-700">{remote}</p>
                            <p className="border-2 ml-3 px-2 text-sky-700">{fulltime}</p>
                        </div>
                        <div className="flex">
                            <MapPinIcon style={{ width: '20px' }} />
                            <p>{location}</p>
                            <p>{salary}</p>
                        </div>
                    </div>
                </div>
             <Link to={`/view/${id}`}><button style={{ height: '30px' }} className="text-white rounded mt-7 px-4 bg-indigo-600">View Details</button></Link>
            </div>

        </div>
    );
};

export default JobDetails;