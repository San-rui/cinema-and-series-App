import * as yup from 'yup'

const passwordValid= /^(?=.*[a-z])(?=.*\d)[a-z\d\w\W]{8,}$/

export const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required("This field is required"),
    lastName: yup
        .string()
        .required("This field is required"),
    birthday: yup
        .string()
        .required("This field is required"),
    email: yup
        .string()
        .email("Invalid email format")
        .required("This field is required"),
    password: yup
        .string()
        .required("This field is required")
        .matches(passwordValid, "Your password has to contain at least 8 characters one letter and one number")
})