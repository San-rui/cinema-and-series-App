import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { validationSchema } from "./validation-schema";
import { defaultValues } from "./default-values";

import './styles.scss'

type Props = {
    id?: string,
    className?: string
};

const LoginForm: FC <Props> = ({ id, className}) => {

    const { register, 
        formState: { errors },
        handleSubmit
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues,
    })

    const onSubmit = async() => {
        // try {
        //     await
        // } catch (e) {
        
        // }

    }

    return(
        <div className="login-form">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='title-login-form'>
                        <h2>Login</h2>
                    </div>
                    <div className='container-input'>
                        <label htmlFor="email">Email</label>
                        <input 
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
                            id="password" 
                            type="password" 
                            placeholder="Enter your password"
                            {...register('password')}
                        />
                        {errors.password?.message}
                    </div>
                    <button type="submit">Send</button>
                </form>
                
            </div>
    )

};

export { LoginForm };