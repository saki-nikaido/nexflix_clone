import axios from "axios";
import { css } from '@emotion/react'
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import useFavorites from "@/hooks/useFavorites";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useCallback, useMemo } from "react";

interface FavoriteButtonProps {
    movieId: string;
}
const FavoriteButton: React.FC<FavoriteButtonProps> = ({movieId}) => {
    const {mutate: mutateFavorites} = useFavorites();
    const {data:currentUser, mutate } =useCurrentUser();

    const isFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || [];
        
        return list.includes(movieId);
    }, [currentUser, movieId] );

    const toggleFavorites = useCallback(async () => {
        try{
        let response;
        if(isFavorite){
            response = await axios.delete('/api/favorite', {data: {movieId}});
        } else {
            console.log("Sending movieId:", movieId);
            response = await axios.post('/api/favorite', { movieId });
        }
        const updatedFavoriteIds = response?.data?.favoriteIds;
        mutate({
            ...currentUser,
            favoriteIds: updatedFavoriteIds
        });
        mutateFavorites();
    } catch (error) {
        console.error('Error updating',error);
    }
    },  [movieId, isFavorite, currentUser, mutate, mutateFavorites]);

    const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;
    return (
        <div onClick={toggleFavorites} css={css`cursor: pointer; height:1.5rem; width: 1.5rem; border-radius:50%; border:2px solid white; box-sizing:border-box; display:flex; justify-content:center;align-items: center; `}>
            <Icon css={css`color:white; `}  />
        </div>
    )
}
export default FavoriteButton;