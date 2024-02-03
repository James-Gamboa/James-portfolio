import Link from "next/link"

function MainMenu() {
    return (
    <>
    <nav className="main-nav" id="main-nav">
        <ul className="main-menu">
            <li className="main-menu__item"><Link href="/" className="main-menu__link">Home</Link></li>
            <li className="main-menu__item"><Link href="/ProjectsPage" className="main-menu__link">Projects</Link></li>
            <li className="main-menu__item"><Link href="/ExperiencePage" className="main-menu__link">Experiences</Link></li>
            <li className="main-menu__item"><Link href="/SkillsPage" className="main-menu__link">Skills</Link></li>
        </ul>
    </nav>
    </>
    )
}

export default MainMenu