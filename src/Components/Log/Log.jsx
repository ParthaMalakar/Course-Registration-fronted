
import PropTypes from 'prop-types';



const Log = ({courseLog}) => {
   const{id,course_name}=courseLog;
    return (

        <div>
          
            <h3>{id}.{course_name}</h3>
            
        </div>
    );
};
Log.propTypes = {
    courseLog: PropTypes.object.isRequired,
   

}
export default Log;