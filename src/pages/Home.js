import React, { useState } from "react";
import "./CSS/Home.css";
import WorkDeskPic from "../../src/images/rich-tervet-q2GNdFmhxx4-unsplash.jpg";
import CodePic from "../../src/images/charlesdeluvio-pjAH2Ax4uWk-unsplash.jpg";
import TeamWorkPic from "../../src/images/teamwork-bricks-cutout.png";
import BackgroundImg from "../../src/images/joakim-honkasalo-ssvjJLB6wIw-unsplash.jpg";
import BackgroundImg2 from "../../src/images/vipul-jha-a4X1cdC1QAc-unsplash.jpg";

export default function Home() {
    const [currentPic, setCurrentPic] = useState(CodePic);

    const changeProfilPic = () => {
        setCurrentPic(currentPic === CodePic ? WorkDeskPic : CodePic);
    };

    const [currentBackground, setCurrentBackground] = useState(BackgroundImg);
    const changeBackground = () => {
        setCurrentBackground(
            currentBackground === BackgroundImg ? BackgroundImg2 : BackgroundImg
        );
    };

    return (
        <main
            className="container"
            style={{ backgroundImage: `url(${currentBackground})` }}
        >
            <section className="top-left">
                <h1>Emil Nordin</h1>
                <br />
                <p>
                    Här har ni en kommande .NET utvecklare som just nu är mitt i
                    sin utbildning!
                </p>
                <br />
                <p>
                    Studerar just nu via Edugrade och trivs väldigt bra här. Jag
                    kan glatt tipsa er som är intresserad av en karriär inom
                    utveckling att kontakta dem!
                </p>
                <p onClick={changeBackground}>Tack för att du besöker mig!</p>
            </section>
            <section className="top-right">
                <img
                    src={TeamWorkPic}
                    style={{ width: "80%" }}
                    alt="teamworkn"
                />
            </section>
            <section className="bottom-left">
                <img
                    onClick={changeProfilPic}
                    src={currentPic}
                    alt="profilbilder"
                    style={{ width: "50%" }}
                />
            </section>
            <section className="bottom-right">
                <p>
                    Detta är min sida där ni kan lära känna mig lite mer och vem
                    jag är! Här kan ni läsa om allt från vad jag har gjort
                    tidigare i mitt liv till hur jag är som person. Tveka inte
                    att kontaka mig via formuläret om ni har några frågor.
                </p>
            </section>
        </main>
    );
}
