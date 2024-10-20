import Link from "next/link";

function NavBar() {
  return (
    <div className="flex justify-between items-center text-white">
      <Link href={"/"}>Home</Link>
      <Link href={"/projects"}>Projects</Link>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/contact"}>Contact</Link>
    </div>
  );
}

export default NavBar;
