import { Global,css } from '@emotion/react'
import { Input } from "@/components/Input"
import { useCallback, useState } from 'react';

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
const globalStyle = css`
  body {
    margin: 0;
    background-color: black;
    max-width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
    height:100dvh;
    min-height: 100svh;
    height: auto !important;
  }
  html {
    height:100dvh;
    min-height: 100svh;
    height: auto !important;
  }
  #__next {
    height: 100dvh;
    min-height: 100svh;
  }
`

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant == 'login' ? 'register' : 'login');
    }, [])
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
                        <div css={css`display: flex; flex-direction: column; gap: 1rem; `}>
                        {variant == 'register' && (
                            <Input 
                                label="Username"
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                                value= {name}
                                />
                        )}
                            <Input 
                            label="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            type="email"
                            value= {email}
                            />
                            <Input 
                            label="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            type="password"
                            value= {password}
                            />
                        </div>
                        <button css={css`
                        background-color: red;
                        font-size: 16px;
                        height: 50px;
                        color: white;
                        border-radius: 6px;
                        width: 100%;
                        margin-top: 40px;
                        &:hover {background-color: #ff00007f};
                        transition: 0.2s;
                        `}>
                        {variant == 'login' ? 'Login' :'Sign up'}
                        </button>
                        <p css={css`color: #c4c4c4; margin-top: 15px;`}>
                            {variant == 'login' ? 'First time using Netflix?' : 'Alredy have an account'}
                            <span onClick={toggleVariant} css={css`color: white; &:hover { text-decoration: underline}; cursor: pointer; margin-left: 4px;`}>
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