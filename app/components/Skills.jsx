import Image from "next/image";

function Skills() {
    return (
        <>
            <section className="i-am">
                <div className="main-container">
                    <h1 className="title">Technical Skills</h1>
                    <div className="flex-container-2">
                        <p>The following competencies are those that I acquired knowledge from formal and informal studies, which through practice improved my understanding and performance of knowledge.</p>
                    </div>
                </div>
                <div className="SkillsGrid">
                    <Image width={400} height={200} src="/img/icons-language/html.png" alt="HTML" />
                    <Image width={400} height={200} src="/img/icons-language/css.png" alt="CSS" />
                    <Image width={400} height={200} src="/img/icons-language/javascript.png" alt="JavaScript" />
                    <Image width={400} height={200} src="/img/icons-language/mongo.png" alt="MongoDB" />
                    <Image width={400} height={200} src="/img/icons-language/git.png" alt="Git" />
                    <Image width={400} height={200} src="/img/icons-language/sql-server.png" alt="SQL Server" />
                    <Image width={400} height={200} src="/img/icons-language/react.png" alt="React" />
                    <Image width={400} height={200} src="/img/icons-language/next-js.png" alt="Next.js" />
                    <Image width={400} height={200} src="/img/icons-language/node-js.jpeg" alt="Node.js" />
                    <Image width={400} height={200} src="/img/icons-language/drupal.png" alt="Drupal" />
                    <Image width={400} height={200} src="/img/icons-language/sass.png" alt="Sass" />
                    <Image width={400} height={200} src="/img/icons-language/shopify.png" alt="Shopify" />
                    <Image width={400} height={150} src="/img/icons-language/Tailwind-Css.png" alt="Tailwind Css" />
                    <Image width={400} height={150} src="/img/icons-language/GraphQL.png" alt="GraphQL" />
                </div>
            </section>
        </>
    );
};

export default Skills;