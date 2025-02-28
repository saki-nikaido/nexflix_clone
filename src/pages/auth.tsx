import { css } from '@emotion/react'
import { Input } from "@/components/Input"

const wrapper = css`
background-image: url('/images/hero.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  margin: 0;
`;
const boxStyle = css`
background-color: black;
  width: 100%;
  height: 100vh;

  @media (min-width: 1024px) {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Auth = () => {
    return (
        <div css={wrapper}>
            <div css={boxStyle}>
                <nav css={css`padding: 20px 48px; `}>
                    <img src="/images/logo.png" alt="Logo" css={css`height: 48px;`} />
                </nav>
                <div css={css`display:flex; justify-content: center; `}>
                    <div 
                    css=
                    {css`background-color: rgba(0 , 0 ,0, 0.7); padding: 64px 65px; align-self: center; margin-top: 10px; 
                    @media (min-width: 1024px) {width: 40%; max-width: 28rem;}; border-radius: 6px; width: 100%;`}>
                        <h2 css={css` color:white; font-size: 36px; margin-bottom: 32px; font-weight: 600;`}>Sign in</h2>
                        <div css={css`display: flex; flex-direction: column; gap: 1rem; `}>
                            <Input 
                            label="Email"
                            onChange={() => {}}
                            id="email"
                            type="email"
                            value= ""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Auth;