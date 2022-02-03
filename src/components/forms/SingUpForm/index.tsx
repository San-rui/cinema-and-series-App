import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { validationSchema } from "./validation-schema";
import { defaultValues } from "./default-values";

import './styles.scss'
import { User } from "../../../types";
import { useUsers } from "../../../hooks";

const SingupForm: FC = () => {

    const { addUser } =useUsers() ;

    const { register, 
        formState: { errors },
        handleSubmit
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues,
    })

    const onSubmit = async(data: Omit<User, 'id'>) => {
        addUser(data) 

    }

    return(
        <div className="singup-form">
                <form className="form" action="" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h2 className="title-sign-up">Sign Up</h2>
                    </div>
                    <div className='container-input'>
                        <label htmlFor="name">Name</label>
                        <input
                            className='input'
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
                            className='input'
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
                            className='input'
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
                    <div className='container-button'> 
                        <button className="button" type="submit">Send</button>
                    </div>
                </form>
                
            </div>
    )

};

export { SingupForm };