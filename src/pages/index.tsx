import { Global, css } from '@emotion/react'
const style = css`
  color: green;
`
const globalStyle = css`
  body {
    margin: 0;
    background-color: black;
    max-width: 100vw;
    overflow-x: hidden;
    height: 100%;
    min-height: 100%;
    height: auto;
  }
  html {
    height: 100%;
    min-height: 100%;
    height: auto;
  }
  #__next {
    height: 100vh;
  }
`
export default function Home() {
  return (
    <>
    <Global styles={globalStyle} />
      <h1 css={style}>Netflix clone</h1>
    </>
  );
}
