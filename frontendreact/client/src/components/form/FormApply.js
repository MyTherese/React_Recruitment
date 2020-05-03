import React from 'react';
import { useform } from 'react-hook-form';
import ReactDOM from 'react-dom';
import DownloadFiles from '../DownloadFiles';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import UseForm from './UseForm';
import ValidateForm from './ValidateForm';
import './Form.css';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 500,
      // border: '2px solid red'
    },
  },
  form: {
    margin: 40,
  },
  container: {
    padding: 40,
    borderStyle: 'groove',
    borderRightStyle: 'none',
    borderLeftStyle: 'none',
  },
  gdpr: {
    padding: 40,
    borderStyle: 'groove',
    borderRightStyle: 'none',
    borderLeftStyle: 'none',
  },

  buttonBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 40,
  },
}));

const FormApply = () => {
  const {handleChange,handleSubmit,values,errors,checked, setValues,handleClear
      } = UseForm(submit, ValidateForm);



  // console.log(values);
  const classes = useStyles();

  // CALLBACK
  function submit() {
    console.log('submitted succesfully');
  }


  return (
    <div>
      <form
        value={setValues}
        name="form"
        onSubmit={handleSubmit}
        className={classes.form}
        noValidate
        autoComplete="off"
      >
        <h1>Personal Information</h1>
        <h2>Tell us something about yourself</h2>

        <div className={classes.container}>
          <div className={classes.root}>
            {/* NAME */}
            <TextField
              required
              id="name"
              label="Name"
              defaultValue="Whats your name?"
              variant="outlined"
              name="name"
              type="name"
              value={values.name}
              onChange={handleChange}
            />

            {errors.name && <p className="errorName">{errors.name}</p>}

            {/* EMAIL */}
            <TextField
              required
              id="email"
              defaultValue="Your email goes here.."
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
             
            />
            {errors.email && <p className="errors">{errors.email}</p>}

            {/*TELEPHONE  */}
            <TextField
              id="telephone"
              defaultValue="Telephone here please..."
              label="Telephone"
              variant="outlined"
              name="telephone"
              type="telephone"
              value={values.telephone}
              onChange={handleChange}
            />
            {errors.telephone && (
              <p className="errorTelephone">{errors.telephone}</p>
            )}
          </div>
        </div>
        

        <DownloadFiles/>


        {/* CHECKBOX */}
        <div className={classes.gdpr}>
          <FormControlLabel
            control={
              <Checkbox
                name="checkbox"
                type="checkbox"
                // checked={setIsChecked}
                value={checked}
                onChange={handleChange}
                color="primary"
               
              />

            }
            label="I have read and understood Recruiter privacy policy*"
          />

          {errors.checked &&  (<p className="errorChecked">{errors.checked}</p>)}
        </div>







        {/* SUBMISSION BOX */}
        <div className={classes.buttonBox}>
          <Button
            type="submit"
            className={classes.button}
            variant="contained"
            color="primary"
            disabled= {!checked }
          >
            Submit application
          </Button>
       
        </div>

        <div className={classes.buttonBox}>
          <Button
            type="reset"
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleClear}
          >
            Clear fields!
          </Button>
        
        </div>
      </form>

    
      {/* )}
    /> */}
    </div>

  
    

  );
};

export default FormApply;
