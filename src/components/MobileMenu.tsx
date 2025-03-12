import React from "react";
import { css } from '@emotion/react'

interface MobileMenuprops {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuprops> = ({ visible }) => {
    if (!visible) {
        return null;
    }
    return (
        <div css={css`
            background-color: black;
            width: 14rem;
            position: absolute;
            top: 2rem;
            left: 0;
            padding: 1rem 0 1rem 0;
            flex-direction: column;
            border-width: 2px;
            border-color: rgb(24 24 27);
        `}>
            <div css={css`display: flex; flex-direction: column; gap: 1rem;`}>
                <div css={css`padding:0 1rem 0 1rem;color: white; text-align: center; &:hover {text-decoration: underline;};`}>
                    HOME
                </div>
                <div css={css`padding:0 1rem 0 1rem;color: white; text-align: center; &:hover {text-decoration: underline;};`}>
                    Series
                </div>
                <div css={css`padding:0 1rem 0 1rem;color: white; text-align: center; &:hover {text-decoration: underline;};`}>
                    Films
                </div>
                <div css={css`padding:0 1rem 0 1rem;color: white; text-align: center; &:hover {text-decoration: underline;};`}>
                    New & Popular
                </div>
                <div css={css`padding:0 1rem 0 1rem;color: white; text-align: center; &:hover {text-decoration: underline;};`}>
                    My List
                </div>
                <div css={css`padding:0 1rem 0 1rem;color: white; text-align: center; &:hover {text-decoration: underline;};`}>
                    Browse by Languages
                </div>
            </div>
        </div>
    )
}
export default MobileMenu;