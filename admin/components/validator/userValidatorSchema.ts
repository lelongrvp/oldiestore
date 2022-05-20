import * as Yup from 'yup';

export const UserValidatorSchema = Yup.object().shape({
    username: Yup.string().required("Username is required!"),
    email: Yup.string().required("Email is required!").email("Invalid email!"),
    password: Yup.string().required("Password is required!")
})