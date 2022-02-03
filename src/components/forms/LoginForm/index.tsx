import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { validationSchema } from "./validation-schema";
import { defaultValues } from "./default-values";
import Box from '@mui/material/Box';

import './styles.scss'
import { useAuth } from "../../../hooks/useAuth";
import { Link, useHistory } from "react-router-dom";

const LoginForm: FC = () => {

    const { login } = useAuth();
    const { push } = useHistory();

    const { register, 
        formState: { errors },
        handleSubmit
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues,
    })

    const onSubmit = async(data:{email:string; password: string}) => {
        try {
            await login(data.email, data.password)
            push('/')
        } catch (e) {
            console.log("error")
        }

    }

    return(
        <Box sx={{width: ['100%', '80%', '80%', '50%' ]}} className="login-form">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='title-login-form'>
                        <h2>Login</h2>
                    </div>
                    <div className='container-input'>
                        <label htmlFor="email">Email</label>
                        <input 
                            className='input'
                            id="email" 
                            type="text" 
                            placeholder="Enter your email"
                            {...register('email')}
                        />
                        {errors.email?.message}
                    </div>
                    <div className='container-input'>
                        <label htmlFor="password">Password</label>
                        <input
                            className='input'
                            id="password" 
                            type="password" 
                            placeholder="Enter your password"
                            {...register('password')}
                        />
                        {errors.password?.message}
                    </div>
                    <div className='button-container'>
                        <button className="button" type="submit">Send</button>
                    </div>
                    <div className='link-container'>
                        <Link to='sign-up' className='link-login-form'>Register</Link>
                    </div>
                    <div>
                        <p>Admin: san@gmail.com</p>
                        <p>Password: asd12345</p>
                    </div>
                </form>
                
            </Box>
    )

};

export { LoginForm };