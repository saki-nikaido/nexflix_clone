import { css } from '@emotion/react'

interface InputProps {
    id: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    label: string;
    type?: string;
}


export const Input: React.FC<InputProps>  = ({
    id,
    onChange,
    value,
    label,
    type,
}) =>{
    return(
        <div css= {css` position: relative;`}>
            <input
                onChange={onChange}
                type={type}
                value={value} 
                id= {id}
                css = {css`
                    display: block; 
                    border-radius: 6px;
                    padding: 1.5rem 1.5rem 0.25rem 1.5rem;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 1rem;
                    color: white;
                    background-color: #4b5563;
                    appearance:none;
                    &:focus {
                    outline: none;
                    box-shadow: 0;
                    &::placeholder {
                        color: transparent;
                    }
                    };    
                    `}
                placeholder=" "
            />
            <label 
            css={css`
                position: absolute; 
                font-size: 16px;
                color: #a1a1aa;
                transition-duration: 150ms;
                top: 1rem;
                left: 1.5rem;
                z-index: 10;
                transform-origin:0 0;
                transition: transform 0.2s ease-out;
                input:placeholder-shown + & {
                transform: translateY(0) scale(1);}
                input:focus + &,
                input:not(:placeholder-shown) + & {
                    transform: translateY(-12px) scale(0.75);
                };
                `}
            htmlFor= {id}>
            {label}
            </label>
        </div>
    );
};