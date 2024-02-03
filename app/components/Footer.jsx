import Link from "next/link"

function MainFooter() {
    return (
        <>
        <footer className="main-footer">
            <p>Contact: </p>
            <div className="social-networks">
                <Link href="https://www.linkedin.com/in/james-guevara-gamboa/" target="_blank"><i className="fi fi-brands-linkedin"></i></Link>
                <Link href="https://github.com/James-Gamboa" target="_blank"><i className="fi fi-brands-github"></i></Link>
                <Link href="mailto:jjguevarag@gmail.com"><i className="fi fi-sr-envelope"></i>
                <span className="email-text">jjguevarag@gmail.com</span></Link>
            </div>
        </footer>
        </>
    )

}

export default MainFooter