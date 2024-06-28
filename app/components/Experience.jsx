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
              <br/>
            <li>
                <strong>TechPro Solutions, remotely – Front End and WordPress Developer January 2024 - July 2024</strong>
                <br />
              </li>
              <li>
                <strong>Achievements/Tasks:</strong>
              </li>
              <hr />
              <li>
                <strong>Website Development:</strong> Designed and developed responsive websites using WordPress, focusing on frontend development and customization of themes and plugins.
              </li>
              <li>
                <strong>UI/UX Design:</strong> Created user-friendly interfaces to enhance usability and overall user experience.
              </li>
              <li>
                <strong>Client Collaboration:</strong> Collaborated closely with clients to understand project requirements, provide technical advice, and ensure timely project delivery.
              </li>
              <li>
                <strong>SEO Optimization:</strong> Implemented SEO best practices to improve website visibility and search engine rankings.
              </li>
              <li>
                <strong>Project Management:</strong> Managed projects using Agile methodologies, overseeing tasks from inception to completion.
              </li>
              <li>
                <strong>Technical Support:</strong> Provided ongoing support and troubleshooting for website functionality and performance optimization.
              </li>
            </ul>
          </div>
        </div>
        <div className="section-divider"></div>
      </section>
    </>
  );
};

export default Experience;
