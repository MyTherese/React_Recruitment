import { useState, useEffect} from 'react'
import './Form.css';
// import axios from 'axios';



const UseForminlog= (callback, ValidateForm) =>  {
const [values, setValues] = useState({ email: "", password:""});
const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [disable, setDisable] = useState(false);




    const handleChange = (e) => {
          
            console.log(e.target.value)
            const {name, value} = e.target;
            setValues({
                    ...values,
                    [name]:value
                });
            
              
     
            };



    const handleSubmit = (e) => {
            e.preventDefault();
            setErrors(ValidateForm(values));
            setIsSubmitting(true);
            setDisable(true);
            
            // this.props.history.push ('/ListCurrentJobs');


// make /admin 
                // axios
                // .post('http://localhost:8080/admin ', {email:values.email, password:values.password})
                // .then((response) => {
                //     setIsSubmitting(true);
                //     console.log(response)
                //     alert('You are loged in!')
                // })
                // .catch((response) => {
                //     console.log("error")
   
   
   
                // })
    };

                useEffect (() => {
                    if (Object.keys(errors).length === 0 && isSubmitting)  {
                    callback();
                }
        
                }, [errors]);

            
return {
    handleChange,
    handleSubmit,
    values,
    errors,
    disable,
  
        };
    };



export default UseForminlog;