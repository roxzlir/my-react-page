import React, { useState, useEffect } from "react";
import BackgroundPic from "../images/pawel-czerwinski-5.jpg";
import "./CSS/About.css";

const images = [
    require("../images/profil-styled-frame.png"),
    require("../images/frank-on-sand.jpg"),
    require("../images/IMG_20221221_002336.jpg"),

    // Lägg till fler bildsökvägar här
];

export default function About() {
    const [currentPicIndex, setCurrentPicIndex] = useState(0);
    const [seeModal, setSeeModal] = useState(false);

    useEffect(() => {
        // Funktionen handleKeyPress definieras för att hantera knapptryckningar.
        const handleKeyPress = (event) => {
            // Kontrollera om användaren tryckte på tangenten "e" samtidigt som "Ctrl" -knappen.
            if (event.key.toLowerCase() === "e" && event.ctrlKey) {
                // Om villkoret är uppfyllt, sätter jag seeModal till true för att visa modalrutan.
                setSeeModal(true);
            }
        };

        // Lägg till en händelselyssnare för "keydown" -händelsen när komponenten monteras.
        document.addEventListener("keydown", handleKeyPress);

        // Returnera en funktion från useEffect för att ta bort händelselyssnaren
        //när den redan visar modalen så man ej kan trycka upp igen
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(0);
            setTimeout(() => {
                setCurrentPicIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }, 1000); // Justera fade-effektens längd här
            setTimeout(() => {
                setOpacity(1);
            }, 1000); // Justera fade-effektens längd här
        }, 5000); // Justera tiden mellan bildbyten här

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="about-container"
            style={{
                backgroundImage: `url(${BackgroundPic})`,
            }}
        >
            <section className="about-left-side">
                <br />
                <h1
                    style={{
                        textAlign: "center",
                        fontFamily: "Protest Revolution, sans-serif",
                    }}
                >
                    Vem är då Emil Nordin?
                </h1>
                <br />
                <p>
                    Just nu håller jag på att utbilda mig till systemutvecklare
                    inom .NET och läser C#. Jag kommer vara färdig utbildad i
                    April 2025.
                </p>

                <p>
                    Jag är en väldigt utåtriktad kille som har hög social
                    kompetens med ett stort intresse av träning, musik och
                    självklart teknik. Jag är 35 år, kommer från Sundsvall och
                    har arbetat inom lite olika branscher i mitt liv som ni kan
                    se på fliken CV.
                </p>
                {seeModal && (
                    <div className="modal">
                        <p>
                            GRATULERAR! Du har hittat den hemliga kombinationen.
                        </p>
                        <p>
                            Du verkar vara lika klipsk som han som designat den
                            här sidan. Ta och kontakta mig, vi kommer säkert
                            komma bra överrens ;D
                        </p>
                        <button onClick={() => setSeeModal(false)}>X</button>
                    </div>
                )}
                <p>
                    Som person är jag en som alltid strävar efter att utvecklas
                    och att göra arbetet effektivare. Att både följa rutiner och
                    arbetssätt men också hela tiden tänka steget längre om
                    nånting går att förändra.
                </p>
                <p>
                    Från alla mina arbeten har jag lärt mig mycket om
                    kundhantering, kundservice men kanske mest om just
                    teambuilding.
                    <br />
                    Skulle beskriva mig själv som en väldigt social person som
                    tycker om att göra bra ifrån mig. Är alltid noggrann och
                    gillar att ha ordning runt omkring mig.
                </p>
                <p>
                    Tror också mycket på att en positiv inställning till
                    arbetet, medarbetare och kunder är det som gör att man växer
                    bäst som grupp, person och som företag!
                </p>
                <p>
                    Hoppas ni tar chansen att vilja arbeta med mig och tveka
                    inte att kontakta mig om ni undrar något mer eller om ni
                    vill komma i kontakt med mig för eventuellt LIA arbete hos
                    just er!
                </p>
            </section>
            <section className="about-right-side">
                <img
                    src={images[currentPicIndex]}
                    alt="selfie"
                    style={{
                        width: "50%",
                        opacity: opacity,
                        transition: "opacity 0.8s ease",
                    }}
                />
            </section>
        </div>
    );
}
