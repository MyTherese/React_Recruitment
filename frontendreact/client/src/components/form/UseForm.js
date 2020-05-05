import { useState, useEffect} from 'react'
import './Form.css';
import axios from 'axios';



const UseForm = (callback, ValidateForm) =>  {
const [values, setValues] = useState({ name:"", email: "", telephone:""});
const [checked, setIsChecked] = useState (false);
const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [disable, setDisable] = useState(false);


 



    const handleClear = (e) =>{  
        setValues('');
    //    const { name, value } = e.target;
    //   setValues(prevState => ({ ...prevState, [name]: value.reset }));
    }


    const handleChange = (e) => {
            e.persist();
            console.log('value of checkbox : ', e.target.checked);

            setIsChecked({
                [e.target.name]:e.target.value
            });

            console.log(e.target.value)
            const {name, value} = e.target;
            setValues({
                    ...values,
                    [name]:value
                });
            

                // const { name, value } = e.target;
                // setValues(prevState => ({ ...prevState, [name]: value }));
              
     
            };



    const handleSubmit = (e) => {
            e.preventDefault();
            setErrors(ValidateForm(values));
            setIsSubmitting(true);
            setIsChecked(true);
            setDisable(true);


                axios
                .post('http://localhost:8080/users', {name:values.name, email:values.email, telephone:values.telephone})
                .then((response) => {
                    setIsSubmitting(true);
                    console.log(response)
                    alert('Thank you for your application!')
                })
                .catch((response) => {
                    console.log("error")
   
   
   
                })};

                useEffect (() => {
                    if (Object.keys(errors).length === 0 && isSubmitting)  {
                    callback();
                }
        
                }, [errors]);

             








return {
    handleChange,
    handleSubmit,
    handleClear,
    values,
    errors,
    checked,
    setIsChecked,
    disable,
  
 
  
};

};

export default UseForm;