import { Global, css } from '@emotion/react'
import { NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';
import { globalStyle } from "@/styles/globalStyle";

const style = css`
  color: green;
`
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

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
const {data: user } = useCurrentUser();

  return (
    <>
    <Global styles={globalStyle} />
      <h1 css={style}>Netflix clone</h1>
      <p css={css`color:white;`}>Logged in as : {user?.email}</p>
      <button css={css`height: 20px; width: 100%; background-color: white;`} onClick={() => signOut()} >Logout!</button>
    </>
  );
}
