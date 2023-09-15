import PropTypes from 'prop-types';
import { BiDollar, BiBookOpen } from 'react-icons/Bi';

const Course = ({ course, handleAdded }) => {
    const { image, course_title, credit_hours, price, course_description } = course;
    return (
            <div className='bg-white rounded-xl w-80'>
                <div>
                    <img className='w-fit mx-auto my-3' src={image} alt="" />
                    <h1 className='text-center font-semibold h-12'>{course_title}</h1>
                    <p className='text-center text-sm mx-3 h-16'>{course_description}</p>
                </div>
                <div className='flex justify-between px-5 py-3'>
                    <h1 className='text-sm text-gray-600 flex flex-row items-center'><BiDollar/>{price}</h1>
                    <h1 className='text-sm text-gray-600 flex flex-row items-center'><BiBookOpen/>Credit: {credit_hours} hr</h1>
                </div>
                <div className='px-3 pb-3'>
                    <button onClick={() => handleAdded(course_title, credit_hours)} className='hover:bg-blue-500 hover:text-white w-full rounded-md py-1 bg-gray-200'>Select</button>
                </div>
            </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAdded: PropTypes.func
}

export default Course;