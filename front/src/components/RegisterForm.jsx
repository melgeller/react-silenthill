import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {API} from '../services/api'
import './LoginForm.scss'

const RegisterForm = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = (formData) => {
        API.post('users/register', formData).then((res) =>{
            console.log(res);
        });
        navigate('/login')
    };

  return (
    <form className='registerForm' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='name'>Username</label>
        <input type="text" id='name' {...register('name', {required:true})}></input>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' {...register('email', {required:true})}></input>
        <label htmlFor='password'>Password</label>
        <input type="password" id='password' {...register('password', {required:true})}></input>
        <label htmlFor='emoji'>Emoji</label>
        <select name="emoji" id="emoji" {...register('emoji', {required:true})}>
            <option value="👦🏻">👦🏻 "Harry Mason"</option>
            <option value="👧🏻">👧🏻 "Cheryl Mason"</option>
            <option value="👩🏻">👩🏻 "Alessa Gillespie"</option>
            <option value="👩🏻‍🦳">👩🏻‍🦳 "Dhalia Gillespie"</option>
            <option value="👱🏻‍♂️">👱🏻‍♂️ "Cybil Bennett"</option>
            <option value="👱🏻‍♀️">👱🏻‍♀️ "Lisa Garland"</option>
            <option value="🧑🏻">🧑🏻 "Michael Kauffmann"</option>
        </select>
        <button type='submit'>Register</button>
    </form>
  )
}

export default RegisterForm