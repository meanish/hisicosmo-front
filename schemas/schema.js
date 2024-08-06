import validator from "validator";
import * as Yup from 'yup';


// export const RegistervalidationSchema = Yup.object().shape({


//     name: Yup.string().required('Please enter your full name').min(2, 'Name must be at least 2 characters').max(255, 'Name cannot exceed 255 characters'),

//     email: Yup.string().email('Invalid email address').required('Email is required')
//         .test('is-email', 'Invalid email address', (value) => {
//             return validator.isEmail(value);
//         }),

//     password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required').max(255, 'Password cannot exceed 255 characters'),
//     password_confirmation: Yup.string()
//         .oneOf([Yup.ref('password'), null], 'Passwords must match')
//         .required('Confirm Password is required'),
//     termsOfService: Yup.boolean().oneOf([true], 'Must accept Terms of Service'),
// });





const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const RegisterValidationSchema = Yup.object().shape({
    username: Yup.string().required("Please enter your full name.").min(2, "Name must be atleaset 2 characters").max(255, "Name cannot exceed 255 characters"),
    email: Yup.string().required("Email is required!").email("Invalid Email Address!"),
    phone: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(10, "too short")
        .max(10, "too long"),
    password: Yup.string().min(8, "Password must be atleast 8 characters ").required("Password is required!").max(255, "Password cannot exceed 255 characters"),
    confirm_password: Yup.string().required("Confirm password is required!").oneOf([Yup.ref("password"), null], "Password must match!"),
})

export const LoginvalidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});
