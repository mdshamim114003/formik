import React from 'react';
import { Formik, Form, Field} from 'formik'
import { signUpSchema } from '../schemas';

const initialValues = {
    name: '',
    email: '',
    channel: '',
    password: '',
    confirm_password: ''
}

function RegForm2() {
    const onSubmit = (values, action) => {
        console.log(values)
        action.resetForm()
    }
    // console.log(errors)
    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={signUpSchema} onSubmit={onSubmit}>
                {({errors, touched}) => (
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

                    <label htmlFor="password">Password</label>
                    {/* <input type="password" id='password' name='password' onChange={handleChange} value={values.password} onBlur={handleBlur} /> */}
                    <Field type="password" name="password" />
                    {errors.password && touched.password ? <p className='text-red-700 mb-5'>{errors.password}</p> : <div className='mb-5'></div>}

                    <label htmlFor="confirm_password">Confirm Password</label>
                    {/* <input type="password" id='confirm_password' name='confirm_password' onChange={handleChange} value={values.confirm_password} onBlur={handleBlur} /> */}
                    <Field type="password" name="confirm_password" />
                    {errors.confirm_password && touched.confirm_password ? <p className='text-red-700 mb-5'>{errors.confirm_password}</p> : <div className='mb-5'></div>}
                
                    <button type='submit' className='border px-2'>Submit</button>
                </Form>
                )}
            </Formik>
        </div>
    );
}

export default RegForm2;