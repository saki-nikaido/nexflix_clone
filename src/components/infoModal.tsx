import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";
import React, { useCallback, useEffect, useState } from "react";
import { css } from '@emotion/react'
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "@/components/PlayButton";
import FavoriteButton from "@/components/FavoriteButton";

interface InfoModalProps {
    visible?: boolean;
    onClose: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const InfoModal: React.FC<InfoModalProps>  = ({ visible, onClose }) => {
    const[ isVisible, setIsVisible ] = useState(!!visible);

    const { movieId }= useInfoModal();
    const { data = {} } = useMovie(movieId);
    useEffect(()=> {
        setIsVisible(!!visible);
    }, [visible]);

    const handleClose = useCallback(
        (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            setIsVisible(false);
            setTimeout(() =>{
                onClose(event);
            }, 300);
    },[onClose]);

    if (!visible){
        return null;
    }
    return (
        <div css ={css`z-index:50; transition:0.3s; background-color:rgba(0,0,0,0.5); display:flex; justify-content:center; align-items:center;
        overflow-y:auto; overflow-x:hidden; position:fixed; inset:0;`}>
            <div css={css`position:relative; width: auto; max-width:768px; border-radius:8px; overflow:hidden;`}>
                <div css={css`  ${isVisible ? 'scale:1': 'scale:0' }; transform:0.3s; position:relative; flex:auto; background-color: rgb(82, 82, 91); filter:drop-shadow(1rem)`}>
                    <div css={css`position:relative; height:384px;`}>
                        <video 
                        css={css`width:100%; object-fit:cover; height:100%; filter:brightness(60%); `}
                        autoPlay
                        muted
                        loop
                        poster={data?.thumbnailUrl}
                        src={data?.vieoUrl}></video>
                        <div css={css`cursor: pointer; position:absolute; top:12px; right:12px; 
                        width:40px;  height:40px; border-radius:50%; background-color:rgba(0,0,0,0.8); display: flex;
                        align-items:center; justify-content:center;`} onClick={handleClose}>
                            <AiOutlineClose css={css`color:white;`} />
                        </div>
                        <div css={css`position:absolute; bottom:10%; left:40px;`}>
                            <p css={css`color:white; font-size:30px; height:100%;`}>
                                {data?.title}
                            </p>
                            <div css={css`display:flex; flex-direction:row; gap:10px; align-items:center;`}>
                                <PlayButton movieId={data?.id} />
                                <FavoriteButton movieId={data?.id} />
                            </div>
                        </div>
                    </div>
                    <div css={css`padding: 1rem 3rem; margin:0;`}>
                        <p css={css`color:green; font:bold; font-size:large;margin:0;`}>
                            New
                        </p>
                        <p css={css`color:white; font-size:large; margin:0; `}>
                            {data?.duration}
                        </p>
                        <p css={css`color:white; font-size:large; margin:0;`}>
                            {data?.genre}
                        </p>
                        <p css={css`color:white; font-size:large; margin:0;`}>
                            {data?.description}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default InfoModal;