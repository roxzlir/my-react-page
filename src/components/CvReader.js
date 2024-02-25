import React from "react";
import CvData from "../prev-jobs.json";
import ".//CSS/CvReader.css";

export default function CvReader() {
    return (
        <div className="cv-container">
            <section className="cv-left-column">
                <h2>Mina tidigare anställningar</h2>
                {CvData.workplaces.map((e) => (
                    <div key={e.id}>
                        <h4>{e.company}</h4>
                        <p className="headline">Anställd som: {e.title}</p>
                        <p className="dateline">{e.workperiod}</p>
                        <p className="info-text">{e.description}</p>
                    </div>
                ))}
            </section>
            <section className="cv-right-column">
                <h2>Utbildning</h2>
                {CvData.education.map((e) => (
                    <div key={e.id}>
                        <h4>{e.name}</h4>
                        <p className="headline">{e.place}</p>
                        <p className="dateline">{e.period}</p>
                        <p className="info-text">{e.description}</p>
                    </div>
                ))}
                <br />
                <h2>Språk</h2>
                {CvData.languages.map((e) => (
                    <div key={e.id}>
                        <p className="headline">{e.name}</p>
                        <p className="info-text">{e.level}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
