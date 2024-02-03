import Link from "next/link";
import Image from "next/image";

function Iam() {
    return(
        <>
        <section className="i-am">
        <div className="main-container">
            <h1 className="title">I Am</h1>
            <div className="aboutMeContainer">
            <Image src="/img/profile-icons/working-computer.png" width={300} height={520} alt="Programmer working on a computer"/>
                <ul>
                    <li>James Guevara Gamboa</li>
                    <li>I am from Costa Rica - Heredia </li>
                    <li>Born November 8, 2000</li>
                    <li className="floating"><Link href="https://drive.google.com/file/d/1HcIyCBmpT1dS9F17mlA-j4DoLEfSARTD/view?usp=sharing" target={"_blank"}>CV</Link></li>
                </ul>
            </div>
        </div>
        <div className="section-divider"></div>
    </section>
        </>
    )
}

export default Iam