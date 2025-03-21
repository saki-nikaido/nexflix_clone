import { css } from '@emotion/react'
import React from 'react';
import { useRouter } from 'next/router';
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
    movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({
    movieId
}) => {
    const router = useRouter();

    return (
        <button onClick={()=>router.push(`/watch/${movieId}`)}
            css={css`background-color: white; cursor: pointer; border-radius: 5px;
            padding: 5px 8px;
            font-size: x-small;
            &:hover {opacity: 0.1;}
            transition: 0ms.2s;
            display: flex;
            display: row;
            align-items: center;
            @media (min-width: 768px) {
            font-size:large;
            border-radius: 5px;
            padding: 8px 10px;
            };`}>
            <BsFillPlayFill />
            Play
        </button>
    )
}
export default PlayButton;