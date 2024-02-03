import Image from "next/image";

function AboutMe() {
  return (
    <>
      <div className="section-divider"></div>
      <section className="about-me">
        <div className="main-container">
          <h1 className="title">¡Hello!</h1>
          <div className="grid-container">
            <Image src="/img/profile-icons/user-with-computer.jpg" alt="User With a Computer" width={260} height={200}/>
            <div>
              <p>
                My name is James Guevara Gamboa, I am a developer that
                every day to expand my knowledge and face challenges that test my skills.
                challenges that test my skills.
              </p>
              <p>
                I am from Costa Rica, I am currently 23 years old and I am looking for my first work experience.
                looking for my first work experience. While I wait for this
                this opportunity comes, I find myself working on my knowledge and
                knowledge and facing challenges that put my skills to the test.
                skills.
              </p>
              <p>
                <em>My next goal is to learn about mobile development.</em>
              </p>
            </div>
          </div>
          <div className="section-divider"></div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;