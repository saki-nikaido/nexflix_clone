import { css } from '@emotion/react'
import React from 'react';
interface NavbarItemProps {
    label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
    label
}) => {
    return (
        <div css={css`color: white; cursor: pointer; &:hover {color: gray;}; transition:0.2s;`}>
            {label}
        </div>
    )
}
export default NavbarItem;