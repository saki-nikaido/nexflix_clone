import React from "react";
import { useRouter } from 'next/router';

import useMovie from "@/hooks/useMovie";

const Watch = () => {
    const router = useRouter();
    const { movieId } = router.query;

    const { data } = useMovie(movieId as string);
}