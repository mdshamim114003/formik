import * as Yup from 'yup'

export const signUpSchema = Yup.object({
    name: Yup.string().min(3).max(20).required("Please enter your name"),
    email: Yup.string().email().required('please enter your Email'),
    channel: Yup.string().min(3).required("Please enter your channel name"),
    location: Yup.string().required('Location is required'),
    gender: Yup.string().required("Please enter your gender").oneOf(['male', 'female', 'other'], 'Invalid gender'),
    selectedOptions: Yup.array().min(1, "Select at least one option").of(Yup.string().required("Required")),
    password: Yup.string().min(4).required("please enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "password must match")
})