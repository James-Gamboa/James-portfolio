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
              <p>I am from Costa Rica and I am currently 23 years old. While waiting for new job opportunities, I dedicate myself to strengthen my knowledge and face challenges that test my skills.</p>
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