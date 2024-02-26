import GitHubReader from "../components/GitHubReader";
import "./CSS/Projects.css";
import GitHubCat from "../images/GitHubCatLogo.png";

export default function Projects() {
    return (
        <div className="project-site-container">
            <div className="project-container">
                <br />
                <img src={GitHubCat} alt="GitHubCat Logo" />
                <h1>Mina GitHub repositories</h1>
            </div>
            <GitHubReader />
        </div>
    );
}
