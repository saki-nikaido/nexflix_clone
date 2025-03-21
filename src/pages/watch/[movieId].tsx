import React from "react";
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import useMovie from "@/hooks/useMovie";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
    const router = useRouter();
    const { movieId } = router.query;

    const { data } = useMovie(movieId as string);

    return (
        <div css={css`height:100vh; width:100%; background-color: black;`}>
            <nav css={css`width:100%; padding: 5px; color:white; display:flex; flex-direction:row; gap:0.5rem;align-items:center;`}>
                <AiOutlineArrowLeft onClick={()=> router.push('/')} css={css`color:white; cursor: pointer;`}/>
                <p  css={css`color:white;display:flex; flex-direction:row;`}>
                    <span> Watching:</span>
                    {data?.title} 
                </p>
            </nav>
            <video  
            autoPlay
            controls
            css={css`height:100%; width:100%; background-color: black; `} src={data?.videoUrl}></video>
        </div>
    )
}
export default Watch;