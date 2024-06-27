import React, { useEffect } from 'react';
import { Formik, Form, Field, FieldArray} from 'formik'
import { signUpSchema } from '../schemas';
import toast from 'react-hot-toast';


const initialValues = {
    name: '',
    email: '',
    channel: '',
    location: '',
    gender: '',
    selectedOptions: [],
    password: '',
    confirm_password: ''
}
const onSubmit = (values, {resetForm}) => {
    console.log(values)
    resetForm()
    toast.success("Form Submited Successfully")
}

function RegForm2() {
    
    // console.log(errors)
    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={signUpSchema} onSubmit={onSubmit} >
                {({errors, touched, setFieldValue}) => (
                <Form>
                    <label htmlFor="name">Name</label>
                    {/* <input type="text" id='name' name='name' onChange={handleChange} value={values.name} onBlur={handleBlur} /> */}
                    <Field type="text" name="name" />
                    {errors.name && touched.name ? <p className='text-red-700 mb-5'>{errors.name}</p> : <div className='mb-5'></div>}
                
                    <label htmlFor="email">E-mail</label>
                    {/* <input type="email" id='email' name='email' onChange={handleChange} value={values.email} onBlur={handleBlur} /> */}
                    <Field type="email" name="email" />
                    {errors.email && touched.email ? <p className='text-red-700 mb-5'>{errors.email}</p> : <div className='mb-5'></div>}

                    <label htmlFor="channel">Channel</label>
                    {/* <input type="text" id='channel' name='channel' onChange={handleChange} value={values.channel} onBlur={handleBlur} /> */}
                    <Field type="text" name="channel" />
                    {errors.channel && touched.channel ? <p className='text-red-700 mb-5'>{errors.channel}</p> : <div className='mb-5'></div>}

                    <label htmlFor="location">Location</label>
                    <Field name="location" type="text" readOnly />
                    {errors.location && touched.location ? <p className='text-red-700 mb-5'>{errors.location}</p> : <div className='mb-5'></div>}
                      

                    <div className='flex gap-3'>
                        <label>Gender: </label>
                        <label htmlFor="male"><Field type="radio" name="gender" value="male" id="male" />Male</label>
                        <label htmlFor="female"><Field type="radio" name="gender" value="female" id="female" />Female</label>
                        <label htmlFor="other"><Field type="radio" name="gender" value="other" id="other" />Other</label>
                    </div>
                    {/* <input type="text" id='channel' name='channel' onChange={handleChange} value={values.channel} onBlur={handleBlur} /> */}
                    {errors.gender && touched.gender ? <p className='text-red-700 mb-5'>{errors.gender}</p> : <div className='mb-5'></div>}

                    <div className='flex gap-4 justify-center items-center'>
                        <h3 className='font-bold -mt-2 text-lg'>Select Languague: </h3>
                        <FieldArray name="selectedOptions">
                            {({ push, remove }) => (
                            <>
                                {/* Example of checkboxes */}
                                <label>
                                    <Field className="mr-2" type="checkbox" name="selectedOptions" value="HTML" />
                                    HTML
                                </label>
                                <label>
                                    <Field className="mr-2" type="checkbox" name="selectedOptions" value="CSS" />
                                    CSS
                                </label>
                                <label>
                                    <Field className="mr-2" type="checkbox" name="selectedOptions" value="JAVASCRIPT" />
                                    JavaScript
                                </label>
                                {/* Add more checkboxes as needed */}
                            </>
                            )}
                        </FieldArray>
                    </div>
                    {errors.selectedOptions && touched.selectedOptions ? <p className='text-red-700 mb-5'>{errors.selectedOptions}</p> : <div className='mb-5'></div>}

                    <label htmlFor="password">Password</label>
                    {/* <input type="password" id='password' name='password' onChange={handleChange} value={values.password} onBlur={handleBlur} /> */}
                    <Field type="password" name="password" />
                    {errors.password && touched.password ? <p className='text-red-700 mb-5'>{errors.password}</p> : <div className='mb-5'></div>}

                    <label htmlFor="confirm_password">Confirm Password</label>
                    {/* <input type="password" id='confirm_password' name='confirm_password' onChange={handleChange} value={values.confirm_password} onBlur={handleBlur} /> */}
                    <Field type="password" name="confirm_password" />
                    {errors.confirm_password && touched.confirm_password ? <p className='text-red-700 mb-5'>{errors.confirm_password}</p> : <div className='mb-5'></div>}
                
                    <FetchLocation setFieldValue={setFieldValue} />
                    <button type='submit' className='border px-2'>Submit</button>
                </Form>
                )}
            </Formik>
        </div>
    );
}

const FetchLocation = ({setFieldValue}) => {
    useEffect(() => {
        const fetchLocation = () => {
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
        };
    
        // Initialize fetchLocation inside useEffect
        fetchLocation();
      }, [setFieldValue]); // Empty dependency array ensures useEffect runs only once
      return null
}

export default RegForm2;