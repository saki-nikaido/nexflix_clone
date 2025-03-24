import { css, Global } from '@emotion/react'
import useBillboard from "@/hooks/useBillboard";
import React, { useCallback } from "react";
import { globalStyle } from '@/styles/globalStyle';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import PlayButton from "./PlayButton";
import useInfoModal from '@/hooks/useInfoModal';

const Billboard = () => {
    const { data } = useBillboard();
    const {openModal} = useInfoModal();

    const handleOpenModal = useCallback(()=>{
        openModal(data?.id);
    },[openModal, data?.id]);

    return (
        <>
        <Global styles={globalStyle} />
        <div css={css`position: relative; height: 56.25vw; `}>
            <video
            css={css`width: 100%; height:56.25vw; object-fit:cover; filter: brightness(60%); `}
            autoPlay
            muted
            loop 
            poster={data?.thumbnailUrl} 
            src={data?.videoUrl}></video>
            <div css={css`
            position: absolute; 
            top:30%; 
            @media (min-width: 768px) {
            top:40%;
            }
            display:flex;
            flex-direction: column;
            margin-left: 2rem;
             `} >
                <p css={css`
                margin-bottom: 0;
                color: white;
                font-size: x-large;
                display:block;
                @media (min-width: 1024px){font-size:xx-large;};
                font-weight: bold;
                text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.4);
                `}>{data?.title}</p>
                <p css={css`
                width: 90%;
                margin-top: 5px;
                color: white;
                font-size: 8px;
                text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.4);
                @media (min-width: 768px) {
                font-size:18px;
                width: 80%;
                };
                @media (min-width: 1024px){width:60%; margin-top: 2rem;} ;
                `}>{data?.description}</p>
                <div 
                onClick={handleOpenModal}
                css={css`
                    display: flex;
                    flex-direction: row;
                    gap: 3px;
                    `}>
                    <PlayButton movieId ={data?.id} />
                    <button css={css`
                    font-weight: 10;
                    border: none;
                    color: white;
                    text-shadow:2px 3px 3px rgba(0, 0, 0, 0.4);
                    &:hover {opacity: 0.1;}
                    transition: 0ms.2s;
                    background-color: rgb(255, 255, 255, 0.2);
                    border-radius: 5px;
                    padding: 5px 8px;
                    font-size: x-small;
                    display: flex;
                    display: row;
                    align-items: center;
                    @media (min-width: 768px) {
                    font-size:large;
                    border-radius: 5px;
                    padding: 8px 10px;
                    };
                    `}>
                    <AiOutlineInfoCircle css={css`
                    margin-right: 2px;                     
                    `}/>More Info</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Billboard;