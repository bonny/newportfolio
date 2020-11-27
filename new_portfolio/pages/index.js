import React from "react";
import Head from "next/head";

import Navlinks from "../components/navlinks"


export default function Home() {
  return (
    <React.Fragment>

    <Head>
      <title>Anna Wikberg Ågren Art Director</title>
      <link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png" />
      <link rel="manifest" href="../public/site.webmanifest" />
    </Head>
   
    <div className="mx-auto w-full px-20">
      <header>
        <div className="flex flex-col items-center h-auto justify-center pt-40 pb-20 bg-yellow-100">
          <p className="soehne-heading text-8xl text-center">Anna <br/>Wikberg <br/>Agren</p>
          <p className="soehne-heading text-8xl text-center">Art Director</p>
          </div>
      </header>  
      <main className="w-full flex flex-row flex-wrap">
        <div className="w-1/2  photo-h bg-red-900 pr-10 cont"> <img src="../static/images/claratest.png"/></div>
        <div className="w-1/2 photo-h bg-yellow-50" />
          <div className="h-10 w-full bg-yellow-100 pl-10"/>
        <div className="w-full photo-h-w photo-h bg-yellow-50" />


      </main>
    </div>

    <Navlinks />
    <style jsx>
      {`
      .soehne-heading {
        font-family: "Soehne-drei";
      }
      .photo-h {
        height: 700px;
      }
      .photo-h-w {
        height: 500px;
      }
      `}
    </style>

    <style jsx global>
        {`
          @font-face {
            font-family: "Soehne-buch";
            src: url("../static/fonts/soehne-breit-test-buch.woff") format("woff"),
            url("../static/fonts/SöhneBreitTest-Buch.otf") format("otf")
          }

          @font-face {
            font-family: "Soehne-drei";
            src: url("../static/fonts/soehne-breit-test-dreiviertelfett.woff") format("woff"),
            url("../static/fonts/SöhneBreitTest-Dreiviretelfett.otf") format("otf")       
          }

          @font-face {
            font-family: "Untitled";
            src: url("/static/fonts/untitled-sans-test.woff") format("woff"),
            url("../static/fonts/UntitledSansTest-Regular.otf") format("otf")      
          }

          body,
          html {
            font-family: "untitled", sans-serif;
            scroll-behavior: smooth;
            color: black;
          }

          a:hover {
            text-decoration: none;
          }
          summary:focus,
          button:focus,
          input:focus {
            outline: none;
            box-shadow: inset 0 0 0 2px #e6b771;
          }
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus {
            -webkit-text-fill-color: #5a4e3e;
            box-shadow: 0 0 0px 1000px #fcf9d5 inset;
            font-size: 16px;
          }
        `}
      </style>

    </React.Fragment>
  );
}

