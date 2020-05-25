import { useState, useEffect, useContext } from 'react';
import {AuthContext} from '../auth/AuthContext'
import { useHistory } from "react-router-dom";

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isWrongCredentials, setIsWrongCredentials] = useState(false);
  const history = useHistory();

  const {user, setUser} = useContext(AuthContext)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);


  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    console.log(values);
    if((values.email.toLowerCase()==='veer@gmail.com') &&
    (values.password === 'nagp')){
        sessionStorage.setItem('loggedUser', values.email);
        setUser(values.email);
        history.push('/')
        setIsWrongCredentials(false);

    }
    else{
        history.push('/signin')
        setIsWrongCredentials(true);
    }

  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isWrongCredentials
  }
};

export default useForm;