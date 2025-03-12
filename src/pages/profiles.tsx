import { Global, css } from '@emotion/react'
import { globalStyle } from "@/styles/globalStyle";
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';
import { useRouter } from 'next/router';

export async function getServerProps(context: NextPageContext) {
    const session = await getSession(context);
    
    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }    
    }
    return {
        props: {}
    }
}

const Profiles = () => {
    const router = useRouter();
    const {data: user } = useCurrentUser();
    return (
        <>
        <Global styles={globalStyle} />
        <div css={css`display: flex; align-items: center; height: 100%; justify-content: center;`}>
            <div css={css`display: flex; flex-direction: column;`}>
                <h1 css={css`color: white; font-size:36px; text-align: center;`}>Who is watching?</h1>
                <div css={css`display: flex; justify-content:center; align-items: center; gap:2rem; margin-top:30px;`}>
                    <div onClick={() => router.push('/')}>
                        <div css={css`
                        display:flex; 
                        flex-direction: column; 
                        width:11rem; 
                        margin:0 auto; 
                        `}>
                            <div  css={css`
                            width:11rem; 
                            height: 11rem; 
                            border-radius:4px; 
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-style: solid;
                            border-width: 2px;
                            border-color: transparent;
                            overflow: hidden;
                            cursor: pointer;
                            transition: color 0.3s ease-in-out;
                            &:hover {
                            border-color: white;
                            }
                            `}>
                            <img css={css`width:100%; height:100%; object-fit: cover;`} src="/images/default-green.png" alt="Profile" />
                            </div>
                            <div css={css`
                            margin-top:1rem; 
                            color:gray; 
                            font-size: 1rem; 
                            text-align: center; 
                            &:hover {
                            color: white;
                            } `}>
                                 {user?.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Profiles;