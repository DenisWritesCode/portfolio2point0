import Link from "next/link";

function Footer() {
  const today = new Date();
  return (
    <footer className="border-t-2 border-foreground">
      <div className="footer-container flex flex-col items-center p-3 md:flex-row-reverse md:w-11/12 md:mx-auto md:justify-between">
        <p>
          <Link href="#home" className="underline hover:uppercase">Back To Top</Link>
        </p>
        <p className="">DenisWritesCode &#169; {today.getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
