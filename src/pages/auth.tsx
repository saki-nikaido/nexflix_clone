import { Global,css } from "@emotion/react";
import { Input } from "@/components/Input";
import { useCallback, useState } from "react";
import axios from "axios";
import { signIn } from 'next-auth/react';
import{ FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { globalStyle } from "@/styles/globalStyle";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@/utils/validationSchema";

const wrapper = css`
background-image: url('/images/hero.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100svh !important;
  min-height: 100svh; 
  margin: 0;
  overflow-y: auto;
  position: relative;
`;
const boxStyle = css`
background-color: black;
  width: 100%;
  height:100dvh;
  overflow-y: auto;
  @media (min-width: 1024px) {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Auth = () => {


  const [variant, setVariant] = useState('login');
  
  interface IFormInput {
    email: string,
    name?: string,
    password: string
  }


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput> ({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
    mode:"onChange",
    resolver: zodResolver(validationSchema),
  });

  const toggleVariant = useCallback(() => {
      setVariant((currentVariant) => currentVariant == 'login' ? 'register' : 'login');
  }, []);
  


  const onSubmit = async(data: IFormInput ) => {
  try {
    if(variant === "register"){
    await axios.post('/api/register', {
      email: data.email,
      name: data.name,
      password: data.password,
    });
  }
  await signIn('credentials' , {
    email: data.email,
    password: data.password,
    redirect: false,
    callbackUrl:'/profiles'
  });
  } catch (error){
    console.log(error);
  };
  };



  return (
    <>
      <Global styles={globalStyle} />
      <div css={wrapper}>
          <div css={boxStyle}>
              <nav css={css`padding: 20px 48px; `}>
                  <img src="/images/logo.png" alt="Logo" css={css`height: 48px;`} />
              </nav>
              <div css={css`display:flex; justify-content: center;  box-sizing: border-box;  `}>
                  <div 
                  css=
                  {css`background-color: rgba(0 , 0 ,0, 0.7); padding: 50px 50px; align-self: center; margin-top: 10px; 
                  @media (min-width: 1024px) {width: 40%; max-width: 380px; }; border-radius: 6px; width: 100%; margin-bottom:20px;`}>
                      <h2 css={css` color:white; font-size: 32px; margin-bottom: 32px; font-weight: 600;`}>{variant == 'login' ? 'Sign in' : 'Resister'}</h2>
                      <form onSubmit={handleSubmit(onSubmit)} css={css`display: flex; flex-direction: column; gap: 1rem; `}>
                      {variant === 'register' && (
                          <Input 
                              label="Username"
                              id="name"
                              register={register}
                              //value= {name}
                              error={errors.name?.message}
                              />
                      )}
                        
                          <Input 
                          label="Email"
                          id="email"
                          register={register}
                          type="email"
                          //value= {email}
                          error={errors.email?.message}
                          />

                          <Input 
                          label="Password"
                          id="password"
                          register={register}
                          type="password"
                          //value= {password}
                          error={errors.password?.message}
                          />

                      
                      <button type="submit"
                      css={css`
                      background-color: red;
                      font-size: 16px;
                      height: 50px;
                      color: white;
                      border-radius: 6px;
                      width: 100%;
                      margin-top: 2rem;
                      &:hover {background-color: #ff00007f};
                      transition: 0.2s;
                      `}>
                      {variant == 'login' ? 'Login' :'Sign up'}
                      </button>
                      </form>
                      <div
                        css={css`display: center; flex-direction: row; align-items: center; gap: 1rem; justify-content: center;`}>
                        <div 
                        onClick={() => signIn('google', {callbackUrl: '/profiles'})} 
                        css={css`width:35px; height:35px; background-color:white; border-radius:50%; display: flex; justify-content: center; align-items: center; cursor: pointer; &:hover{opacity:-70}; transition:0.2s; margin-top:2rem; `}>
                          <FcGoogle size={30}/>
                        </div>
                      <div 
                        onClick={() => signIn('github', {callbackUrl: '/profiles'})}
                        css={css`width:35px; height:35px; background-color:white; border-radius:50%; display: flex; justify-content: center; align-items: center; cursor: pointer; &:hover{opacity:-70}; transition:0.2s; margin-top:2rem; `}>
                          <FaGithub size={30}/>
                        </div>
                      </div>
                      <p css={css`color: #c4c4c4;`}>
                          {variant == 'login' ? 'First time using Netflix?' : 'Already have an account'}
                          <span onClick={toggleVariant} css={css`color: white; &:hover { text-decoration: underline}; cursor: pointer; margin-left: 4px; margin-top: 2rem;`}>
                              {variant == 'login' ? 'Create an account' :'Login'}
                          </span>
                          
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default Auth;