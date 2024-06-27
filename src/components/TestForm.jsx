import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { signUpSchema } from '../schemas';
import toast from 'react-hot-toast';

function TestForm() {
    const {values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue} = useFormik({
        initialValues: {
            location: '',
            gender: '',
            name: '',
            selectedOptions: [],
            // email: '',
            // password: '',
            // confirm_password: ''
        },
        validationSchema: signUpSchema,
        onSubmit: (values, {resetForm}) => {
            console.log(values)
            toast('Success')
            resetForm()
        }
    })
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                const { latitude, longitude } = position.coords;
                const location = `Latitude: ${latitude}, Longitude: ${longitude}`;
                // Set the location value in Formik
                setFieldValue('location', location);
                },
                (error) => {
                console.error('Error getting location:', error);
                }
            );
        } else {
        console.error('Geolocation is not supported by this browser.');
        }
      }, [setFieldValue]); // Empty dependency array ensures useEffect runs only once
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" onChange={handleChange} value={values.name} />
                {errors.name && touched.name ? <p>{errors.name}</p> : ''}

                <label>Email:</label>
                <input type="email" name="email" onChange={handleChange} value={values.email} />
                {errors.email && touched.email ? <p>{errors.email}</p> : ''}


                <label>Password: </label>
                <input type="password" name="password" onChange={handleChange} value={values.password} />
                {errors.password && touched.password ? <p>{errors.password}</p> : ''}

                <label>Confirm Password</label>
                <input type="password" name="confirm_password" onChange={handleChange} value={values.confirm_password} />
                {errors.confirm_password && touched.confirm_password ? <p>{errors.confirm_password}</p> : ''}



                <label>Location:</label>
                <input type="text" name="location" value={values.location} readOnly />
                {errors.location && touched.location ? <p>{errors.location}</p> : ''}

                <div className='flex gap-5 items-center'>
                    <label>Gender: </label>
                    <label htmlFor="male"><input type="radio" name="gender" value="male" id='male' onChange={handleChange} onBlur={handleBlur}/> Male</label>
                    <label htmlFor="female"><input type="radio" name="gender" value="female" id='female' onChange={handleChange} onBlur={handleBlur} /> Female</label>
                    <label htmlFor="other"><input type="radio" name="gender" value="other" id='other' onChange={handleChange} onBlur={handleBlur} /> Other</label>
                </div>
                {errors.gender && touched.gender ? <p className='text-red-700'>{errors.gender}</p> : ''}


                <div className='flex gap-2'>
                    <label>Language: </label>
                    <label htmlFor="html"><input type="checkbox" name="selectedOptions" id="html" value='html' onChange={handleChange} /> Html</label>
                    <label htmlFor="css"><input type="checkbox" name="selectedOptions" id="css" value='css' onChange={handleChange} /> Css</label>
                    <label htmlFor="js"><input type="checkbox" name="selectedOptions" id="js" value='javascript' onChange={handleChange} /> JavaScript</label>
                </div>
                {errors.selectedOptions && touched.selectedOptions ? <p className='text-red-700'>{errors.selectedOptions}</p> : ''}




                {/* <FetchLocation setFieldValue={setFieldValue} /> */}
                <button className='border px-2' type='submit'>Submit</button>
            </form>
        </div>
    );
}



export default TestForm;