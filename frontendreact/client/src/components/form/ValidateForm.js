// funvtion that takes in a value obkect
export default function ValidateForm (values){
  let errors = {};

// name
if(!values.name) {
  } else if (!/^[a-z][a-z\s]*$/.test(values.name)) { 
    errors.name  = 'Bara bokstäver tack...!';
  }

// email
if(!values.email){
} else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Ogiltig mail  ...';
}

// telephone
if(!values.telephone) {
} else if (!/[0-9]/.test(values.telephone)){
  errors.telephone = 'Bara siffror tack...';
}

// checked 
if(!values.checked){
}else if(values.checked){
  errors.checked = 'Must be checked!';
}




return errors;
};






