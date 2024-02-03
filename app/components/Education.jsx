import Image from "next/image";


function Education()  {
    return (
        <>
        <section className="i-am">
            <div className="main-container">
                <h1 className="title">Education</h1>
                <div className="flex-container-2">
                    <Image className="empty-2" src="/img/icons/bar-graphic.png" alt="Bar Graphic" width={384} height={384} />
                    <ul>
                        <li><strong>I have invested time and dedication in participating in several online courses</strong>
                            and training programs to acquire a solid set of technical skills in the field of Front End development. Some of the courses I have completed are:</li>
                        <li><strong>&ldquo;Web design and development technician&rdquo; in Centro de Tecnología y Artes Visuales (CETAV): </strong>
                        Through my technical background, I have acquired solid skills in web design and programming. I have explored various programming languages, content management systems and workflows, developing competencies in web design and programming with a focus on functionality, accessibility and usability based on web standards.</li>
                        <li><strong>&ldquo;JavaScript Algorithms and Data Structures&rdquo; in freeCodeCamp : </strong>
                            This course has provided me with a deep understanding of fundamental algorithms and data structures, which is crucial for efficient and scalable web application development.</li>
                        <li><strong>&ldquo;Responsive Web Design&rdquo; in freeCodeCamp : </strong>
                            During this course, I gained knowledge about the principles and best practices of responsive web design,
                            enabling me to create user interfaces that adapt to different devices
                            different devices and screen sizes.</li>
                    </ul>
                </div>
            </div>
            <div className="section-divider"></div>
        </section>
        </>
    )
}

export default Education;