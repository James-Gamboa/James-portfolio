import Image from "next/image";

function Experience() {
  return (
    <>
      <section className="i-am">
        <div className="main-container">
          <h1 className="title">Experience</h1>
          <div className="flex-container-2">
            <Image className="empty" src="/img/icons/office.png" width={390} height={390} alt="Office Icon With User" />
            <ul className="letter-small">
              <li>
                <strong>
                  ContraLuz, remotely – Front End March 2023 - December 2023
                </strong>
              </li>
              <li>
                <strong>Achievements/Tasks:</strong>
              </li>
              <hr />
              <li>Developed a landing page using Next.js and ISR, achieving a perfect Lighthouse score.</li>
              <li>Led the platform migration to Shopify and launched the ecommerce site.</li>
              <li>Built an Admin panel using SSR for efficient website management.</li>
              <li>Implemented SEO techniques for improved search engine performance.</li>
            </ul>
          </div>
        </div>
        <div className="section-divider"></div>
      </section>
    </>
  );
};

export default Experience;
