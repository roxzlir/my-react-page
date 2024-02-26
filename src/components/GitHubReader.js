import React, { useState, useEffect } from "react";
import "./CSS/GitHubReader.css";
import GitHubPic from "../images/github-logo.png";

const GitHubReader = () => {
    const [repositories, setRepositories] = useState([]); // Repositories-data som hämtas från API:et
    const [loading, setLoading] = useState(true); // Indikator för att visa om laddning är aktiv

    // Använder useEffect för att göra anrop när komponenten körs
    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                // Anropar min GitHub API för att hämta användarens repositories
                const response = await fetch(
                    "https://api.github.com/users/roxzlir/repos"
                );

                if (response.ok) {
                    const data = await response.json();
                    console.log("API response:", data);
                    setRepositories(data);
                } else {
                    console.error("Kunde ej hämta data från Git API");
                }

                setLoading(false); //Markerar att laddningen är klar då den sätter loading som false
            } catch (error) {
                console.error("Error fetching repositories:", error);
                setLoading(false); //Vill att laddningen ska visas som även om det blev fel, då laddningen är ju klar
            }
        };

        fetchRepositories();
    }, []); // Använder en tom array för att anropa useEffect endast en gång när sidan läses in

    return (
        <div>
            <br />
            <section className="loading-container">
                {loading && (
                    <p className="loading-text">
                        Laddar GiTHub repos av användare Roxzlir...
                    </p>
                )}
            </section>
            <section className="git-container">
                <ul className="git-ul">
                    {repositories.map((repo) => (
                        <li className="git-li" key={repo.id}>
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={GitHubPic}
                                    alt="GitHub logo"
                                    style={{ width: "40%" }}
                                />
                                <br />
                            </a>
                            <h4>{repo.name}</h4>
                            <p>Language: {repo.language}</p>
                            <p>{repo.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default GitHubReader;
