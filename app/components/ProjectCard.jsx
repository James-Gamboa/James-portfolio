import Image from "next/image";
import PropTypes from "prop-types";
import Link from "next/link";
function ProjectCard({ id, title, image, description, link }) {
    return (
        <>
            <div className="project-card">
                <Image src={image} alt="Card-Imagen" width={600} height={250} className="card-banner" />
                <div className="card-content">
                    <h3 className="title">{title}</h3>
                    <p className="description">{description}</p>
                    <Link href={link} target="_blank" rel="noopener noreferrer" className="button">
                        Go to Project &ldquo;{title}&rdquo;
                    </Link>
                </div>
            </div>
        </>
    );
}

ProjectCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
};

ProjectCard.defaultProps = {
    id: "#",
    title: "No hay titulo",
    image: "/img/projects/no-image.png",
    description: "No hay Descripción-----",
    link: "#",
};

export default ProjectCard;