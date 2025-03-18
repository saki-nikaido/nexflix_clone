import { GetServerSidePropsContext} from 'next';

import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';



export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions );

  if(!session){
    return {
      redirect:{
        destination: '/auth',
        permanent: false,
      }
    }
  }
  return {
    props:{}
  }
}


export default function Home() {
  const {data: movies = [] } =useMovieList();
  const {data:favorites = [] } =useFavorites();
  return (
    <>
      <Navbar />
      <Billboard />
      <div>
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  );
}
