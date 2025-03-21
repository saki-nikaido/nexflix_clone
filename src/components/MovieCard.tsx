import React from "react";
import { useRouter } from 'next/router';

import { css } from '@emotion/react';
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "@/components/FavoriteButton";

interface MovieListProps {
    data:Record<string, string>;
}
const MovieCard:React.FC<MovieListProps> = ({ data }) => {
    const router = useRouter();
    return (
        <div css={css`position:relative;  height:12vw; background-color: rgb(24 24 27);
          &:hover > div {
            opacity: 1;
            visibility: visible;
            transform: translate(10px, -50px) scale(1.1);
        }
            &:hover > img {
            opacity: 0;
            }
        `}>
            <img css={css`height:100%; border-radius:5px;  width:100%;display:block; object-fit:cover; transition: 0.2s ease; 
                &:hover{visibility: hidden !important;};   `}  src={data.thumbnailUrl} alt="" />
            <div css={css`
            position:absolute; 
            width:100%; 
            height:auto;
            visibility: hidden;
            top:0; 
            z-index:10; 
            object-fit:cover; 
            border-radius:5px; 
            ;`}>
                <img css={css`height:12vw; width:100%; object-fit:cover; margin-bottom:0%; display:block; border-top-right-radius:5px; border-top-left-radius:5px;`}  src={data.thumbnailUrl} alt="" /> 
                <div css={css`z-index: 10; background-color: #4b5563; margin-top:0; position:absolute; width:100%; padding: 1rem; box-sizing: border-box ; 
                 `}>
                    <div css={css`display: flex; flex-direction: row; align-items: center; gap: 5px;`}>
                        <div css={css`cursor: pointer; height:1.5rem; width: 1.5rem; border-radius:50%; background-color:white; display:flex; justify-content:center;align-items: center; `} onClick={()=>router.push(`/watch/${data?.id}`)} >
                            <BsFillPlayFill />
                        </div>
                        <FavoriteButton movieId={data?.id} />
                    </div>
                    <p css={css`color:green; font-weight:bold; font-size:1rem; margin:0%; margin-top:0.5rem; `}>New<span css={css`color:white; padding-left:5px; font-weight:normal; `}>2023</span></p>
                    <div css={css`display:flex; flex-direction:row; margin-top:0; align-items:center;`}>
                    <p css={css`color:white; font-size:small; margin:0%; margin-top:0.5rem;`}>{data.duration}</p>
                    </div>
                    <div css={css`display:flex; flex-direction:row; margin-top:0; align-items:center;`}>
                    <p css={css`color:white; font-size:small; margin:0%; margin-top:0.5rem;`}>{data.genre}</p>
                    </div>
                </div>
                
            </div> 
        </div>

    )
}
export default MovieCard;