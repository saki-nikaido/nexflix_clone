import React from "react";
import {isEmpty} from "lodash"
import MovieCard from "@/components/MovieCard";
import { css } from '@emotion/react'
interface MovieListProps {
    data:Record<string, string>[];
    title:string;
}
const MovieList:React.FC<MovieListProps> = ({ data, title }) => {
    if(isEmpty(data)){
        return null;
    }
    return (
        <div css={css`padding:0 1.5rem;`}>
            <p css={css`color:white; @media (min-width: 768px) {
                font-size:16px;
                };
                font-size:x-small;`}>
                {title}
            </p>
            <div css={css`display: grid; grid-template-columns: repeat(4, 1fr); gap:1rem; background-color: rgb(24 24 27); width:100%;`}>
                {data.map((movie)=>(
                    <MovieCard key={movie.id} data={movie} />
                ) )}
            </div>
        </div>
    )
}
export default MovieList;