// funvtion that takes in a value obkect
export default function ValidateForm (values){
  let errors = {};

// name
if(!values.name) {
  } else if (!/^[a-z][a-z\s]*$/.test(values.name)) { 
    errors.name  = 'Just letters please..!';
  }

// email
if(!values.email){
} else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid im afraid  ...';
}

// telephone
if(!values.telephone) {
} else if (!/[0-9]/.test(values.telephone)){
  errors.telephone = 'Just numbers please...';
}

// checked 
if(!values.checked){
}else if(values.checked){
  errors.checked = 'Must be checked!';
}

// password
if(!values.password){
  errors.password="password is requiered!";
}else if(values.password.length <10){
  errors.password = 'Must be more than ten signs!';
}






return errors;
};






