import Link from "next/link";

export default function Navlinks() {
  return (
    <React.Fragment>
      <div className="flex flex-row justify-between w-full px-5 md:px-10 lg:px-20 pb-7 md:pb-14 fixed bottom-0 z-50">
        <Link href="/work">
          <a className="soehne hover:text-gradient-to-r from-primary via-secondary to-danger block bg-blue text-lg">
            Work
          </a>
        </Link>
        <Link href="/about">
          <a className="soehne hover:text-gradient-to-r from-primary via-secondary to-danger block bg-blue text-lg">
            About
          </a>
        </Link>
        <Link href="/contact">
          <a className="soehne hover:text-gradient-to-r from-primary via-secondary to-danger block bg-blue text-lg">
            Contact
          </a>
        </Link>
      </div>
    </React.Fragment>
  );
}
