import Link from "next/link";

function MobileNavBar({ onHamClick }: { onHamClick: () => void }) {
  return (
    <div className="border-t-2 border-foreground pt-2 flex flex-col text-center items-center space-y-2">
      <Link className="uppercase underline" onClick={onHamClick} href={"/#services"}>Services</Link>
        <Link className="uppercase underline" onClick={onHamClick} href={"/#toolsNskills"}>Tools/SkillSet</Link>
        <Link className="uppercase underline" onClick={onHamClick} href={"/#projects"}>Projects</Link>
        {/* <Link className="uppercase underline" onClick={onHamClick} href={"/#experience"}>Experience</Link>
        <Link className="uppercase underline" onClick={onHamClick} href={"/#blog"}>Blog</Link> */}
        <Link className="uppercase underline" onClick={onHamClick} href={"/contact"}>Contact</Link>
    </div>
  );
}

export default MobileNavBar;
