import PropTypes from 'prop-types';
const Course = ({course}) => {
    const {id,picture,course_name,description,price,credit} = course;
    return (
        <div className='bg-[#FFF] p-3'>
            <div className='space-y-4 p-3'>
            <img className='w-[250px] h-[200px] ' src={picture} alt={`Cover picture of the title ${course_name}`} />
            <h5 className='text-lg font-semibold'>{course_name}</h5>
            <h3 className='w-[245px] font-normal text-sm'>{description}</h3>
            
        </div>
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object.isRequired,

}
export default Course;