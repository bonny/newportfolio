export default function Layout({ children }) {
  return (
    <div>
      {children}
      <style jsx global>
        {`
          @font-face {
            font-family: "Ivar-display";
            src: url("/fonts/IvarDisplayCondensed-SemiBold.woff") format("woff"),
            url("/fonts/IvarDisplayCondensed-SemiBold.otf") format("otf")
          }
          @font-face {
            font-family: "Ivar-fine-light";
            src: url("/fonts/IvarFine-light.woff") format("woff"),
            url("/fonts/IvarFine-light.otf") format("otf")
          }
          @font-face {
            font-family: "Ivar-fine-light-italic";
            src: url("/fonts/IvarFine-lightItalic.woff") format("woff"),
            url("/fonts/IvarFine-lightItalic.otf") format("otf")
          }
          @font-face {
            font-family: "Soehne-buch";
            src: url("/fonts/soehne-breit-test-buch.woff") format("woff"),
            url("/fonts/SöhneBreitTest-Buch.otf") format("otf")
          }

          @font-face {
            font-family: "Soehne-drei";
            src: url("/fonts/soehne-breit-test-dreiviertelfett.woff") format("woff"),
            url("/fonts/SöhneBreitTest-Dreiviretelfett.otf") format("otf")       
          }

          @font-face {
            font-family: "Untitled";
            src: url/fonts/untitled-sans-test.woff") format("woff"),
            url("/fonts/UntitledSansTest-Regular.otf") format("otf")      
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

          .soehne-heading {
            font-family: "Soehne-drei";
          }
          .ivar-heading {
            font-family: "Ivar-display";
          }
          .ivar-light {
            font-family: "Ivar-fine-light";
          }
          .ivar-lightIta {
            font-family: "Ivar-fine-light-italic";
          }
          .untitled-text {
            font-family: "Untitled";
            font-size: 16px;
            line-height: 1.5;
          }
        `}
      </style>
    </div>
  );
}
