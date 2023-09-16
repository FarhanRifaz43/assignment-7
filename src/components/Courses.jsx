import PropTypes from 'prop-types';
import Course from './Course';
const Courses = ({courses, handleAdded}) => {
    return (
        <div className="lg:w-3/4 mb-5">
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 w-fit mx-auto'>
                {
                    courses.map(course => <Course key={courses.course_title} course={course} handleAdded={handleAdded}></Course> )
                }
            </div>
        </div>
    );
};

Courses.propTypes = {
    courses: PropTypes.array,
    handleAdded: PropTypes.func
}

export default Courses;