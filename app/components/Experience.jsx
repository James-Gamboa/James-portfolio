import Image from "next/image";

function Experience() {
  return (
    <>
      <section className="i-am">
        <div className="main-container">
          <h1 className="title">Experience</h1>
          <div className="flex-container-2">
            <Image className="empty" src="/img/icons/office.png"  width={384} height={384} alt="Office Icon With User" />
            <ul className="letter-small">
              <li>
                <strong>
                  Although I do not have formal work experience in the field of Front-End
                  Front-End development, I have been constantly looking for opportunities to
                  opportunities to apply the knowledge and skills acquired through
                  acquired through courses and personal projects.
                </strong>
              </li>
              <hr />
            </ul>
          </div>
        </div>
        <div className="section-divider"></div>
      </section>
    </>
  );
};

export default Experience;