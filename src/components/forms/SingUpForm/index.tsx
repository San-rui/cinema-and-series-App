import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { validationSchema } from "./validation-schema";
import { defaultValues } from "./default-values";

import './styles.scss'
import { User } from "../../../types";

type Props = {
    id?: string,
    className?: string
};

const SingupForm: FC <Props> = ({ id, className}) => {

    const { register, 
        formState: { errors },
        handleSubmit
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues,
    })

    const onSubmit = async(data: User) => {
        // try {
        //     await funcion para setear usuarios nuevos
        // } catch (e) {
        
        // }

    }

    return(
        <div className="singup-form">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='title-login-form'>
                        <h2>Login</h2>
                    </div>
                    <div className='container-input'>
                        <label htmlFor="name">Name</label>
                        <input 
                            id="name" 
                            type="text" 
                            placeholder="Enter your name"
                            {...register('name')}
                        />
                        {errors.name?.message}
                    </div>
                    <div className='container-input'>
                        <label htmlFor="lastname">Last name</label>
                        <input 
                            id="lastname" 
                            type="text" 
                            placeholder="Enter your last name"
                            {...register('lastName')}
                        />
                        {errors.lastName?.message}
                    </div>
                    <div className='container-input'>
                        <label htmlFor="birthday">Birthday</label>
                        <input 
                            id="birthday" 
                            type="date" 
                            placeholder="Enter your email"
                            {...register('birthday')}
                        />
                        {errors.birthday?.message}
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

export { SingupForm };