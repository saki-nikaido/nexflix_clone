import { css, Global } from '@emotion/react'
import { globalStyle } from '@/styles/globalStyle';
import NavbarItem from '@/components/Navbaritem';
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs'
import MobileMenu from '@/components/MobileMenu';
import { useCallback, useEffect, useState } from 'react';
import AccountMenu from '@/components/AccountMenu';

const TOP_OFFSET = 66;

const Navbar = () => {
const [showMoblieMenu, setShowMobileMenu] = useState(false);
const [showAccountMenu, setShowAccountMenu] = useState(false);
const [showBackground, setShowBackground] = useState(false);

useEffect(() => {
    const handlescroll = () => {
        if (window.scrollY > TOP_OFFSET ) {
            setShowBackground(true);
        } else {
            setShowBackground(false);
        }
    }
    window.addEventListener('scroll', handlescroll);
    return () => {
        window.removeEventListener('scroll', handlescroll);
    }
}, [] );

const toggleMobileMenu = useCallback (() => {
    setShowMobileMenu((current) => !current);
}, []);

const toggleAccountMenu = useCallback (() => {
    setShowAccountMenu((current) => !current);
}, []);

    return (
        <>
        <Global styles={globalStyle} />
        <nav css={css`width:100%; position: fixed; z-index: 40;`}>
            <div css={css`
                padding: 2rem 4rem;
                @media (min-width: 768px) {
                padding-left: 64px; /* md:px-16 */
                padding-right: 64px;
                }
                display: flex;
                flex-direction: row;
                align-items: center;
                transition-duration: 500ms;
                background-color:${showBackground ? ' rgb(24 24 27)' : ''};
                height: 100%;
                opacity: ${showBackground ? ' 0.9' : ''};
            `}>
                <img css= {css`height:16px; @media (min-width: 1024px){height:40px;}`} src="/images/logo.png" alt="" />
                <div css={css`
                display: flex;
                display: none;
                flex-direction: row;
                align-items: center;
                gap: 2rem;
                margin-left: 28px;
                @media (min-width: 1024px) {display:flex; };
                `} >
                    <NavbarItem label= "Home" />
                    <NavbarItem label= "Series" />
                    <NavbarItem label= "Films" />
                    <NavbarItem label= "New & Popular" />
                    <NavbarItem label= "My List" />
                    <NavbarItem label= "Browse by Languages" />
                </div>
                <div onClick={toggleMobileMenu} css={css`
                @media (min-width: 1024px) {display:none; };
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1rem;
                margin-left: 28px;
                cursor: pointer;
                position: relative;
                `}>
                    <p css={css`color: white; font-size: 14px;`}>Browse</p>
                    < BsChevronDown css={css`color: white; transition: 0.2s;  transform: ${showMoblieMenu ? "rotate(180deg)" : "rotate(0deg)"};`} />
                    < MobileMenu visible={showMoblieMenu}/>
                </div>
                <div  css={css`display: flex; flex-direction: row; margin-left: auto; gap:2rem; align-items: center;`}>
                    <div  css={css`color: #edf2f7; cursor: pointer; &:hover {color: #e2e8f0;  }; font-size: 14px;`}>
                       <BsSearch />
                    </div>
                    <div  css={css`color: #edf2f7; cursor: pointer; &:hover {color: #e2e8f0;  }; font-size: 14px;`}>
                       <BsBell />
                    </div>

                    <div onClick={toggleAccountMenu} css={css`display: flex; flex-direction:row; align-items: center; gap:1rem; cursor: pointer; position:relative; `}>
                        <div   css={css`width:2rem; height: 2rem; @media (min-width: 1024px) {width: 40px; height: 40px; };border-radius:4px; overflow: hidden; `}>
                            <img css={css`width:100%; height:100%`} src="/images/default-green.png" alt="" />
                        </div>
                        < BsChevronDown css={css`color: white; transition: 0.2s; transform: ${showAccountMenu ? "rotate(180deg)" : "rotate(0deg)"};`} />
                        < AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>
            
            
        </nav>
        </>
    )
}
export default Navbar;
