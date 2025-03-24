import { signOut } from "next-auth/react";
import React from "react";
import { css } from '@emotion/react'
import useCurrentUser from "@/hooks/useCurrentUser";
interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
    const {data} = useCurrentUser();
    if (!visible) {
        return null;
    }
    return (
        <div  css={css`background-color: black; width:220px; position:absolute; top:3rem; right:0;padding:2rem 0; flex-direction:column; border-width:2px; color: #2d3748;  display: flex;`}>
            <div  css={css`width:100%; display: flex; flex-direction: column; gap: 1rem;`}>
                <div  css={css`padding: 0 1rem; display: flex; flex-direction:row; gap: 1rem; align-items:center; width:100%;`}>
                    <img css={css`width:1.5rem; border-radius:2px;`} src="/images/default-green.png" alt="" />
                    <p  css={css`color: white; font-size: x-small; @media (min-width: 768px) {font-size:16px;}; &:hover {text-decoration: underline;};`}>
                        {data?.name}
                    </p>
                </div>
                <hr css={css`width:100%; height: 1px; overflow: visible; background-color: rgb(24 24 27);border-color: rgb(24 24 27); border-top:solid 1px rgb(24 24 27); margin: 1rem 0;`} />
                <div onClick={() => signOut()} css={css`padding: 0 2rem; text-align:center; color: white; font-size: x-small; @media (min-width: 768px) {font-size:16px;}; &:hover {text-decoration: underline;};`} >
                    Sign out of Netflix
                </div>
            </div>
        </div>
    )
}

export default AccountMenu;