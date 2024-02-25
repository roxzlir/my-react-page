import React, { useState } from "react";
import "./CSS/ContactForm.css";

export default function ContactForm() {
    // State för att hålla formulärdata
    const [formInput, setFormInput] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    // Funktion för att hantera ändringar i formulärfält
    function handleInput(e) {
        // Extrahera namn och värde från det aktuella formulärfältet
        const { name, value } = e.target;
        // Uppdatera state med den nya värden för det aktuella formulärfältet
        setFormInput((prevInput) => ({
            ...prevInput, // Behåll befintliga värden för andra fält
            [name]: value, // Uppdatera endast värdet för det specifika fältet
        }));
    }

    // Funktion som hanterar inlämning av formulärdata
    const handleSubmit = async (e) => {
        e.preventDefault(); // Förhindra standardbeteende för formulärinlämning

        try {
            // Skicka POST-förfrågan till JSONPlaceholder API för att spara formulärdata
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    method: "POST", // Använd POST-metoden för att skicka data
                    headers: {
                        "Content-Type": "application/json", // Ange att innehållet är JSON-data
                    },
                    body: JSON.stringify(formInput), // Konvertera formulärdata till JSON-format
                }
            );

            // Kontrollera om förfrågan lyckades
            if (!response.ok) {
                throw new Error("Något gick fel vid sparande av formulärdata"); // Kasta ett fel om något gick fel med förfrågan
            }

            // Logga den sparade formulärdatan till konsolen
            console.log(formInput, "Formulärdata sparad på JSONPlaceholder");

            // Återställ formulärdatan till tomma strängar efter inlämning
            setFormInput({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (error) {
            console.error("Fel:", error.message); // Logga felmeddelandet till konsolen om det uppstår ett fel
        }
    };

    return (
        <main className="form-container">
            <section className="form-section">
                <form onSubmit={handleSubmit}>
                    {/* Input-fält för namn med händelsehanterare för ändringar */}
                    <input
                        type="text"
                        name="name"
                        value={formInput.name}
                        onChange={handleInput}
                        placeholder="För & Efternamn"
                    />
                    <br />
                    {/* Andra formulärfält för e-post, telefonnummer och meddelande */}
                    <input
                        type="text"
                        name="email"
                        value={formInput.email}
                        onChange={handleInput}
                        placeholder="E-post"
                    />
                    <br />
                    <input
                        type="text"
                        name="phone"
                        value={formInput.phone}
                        onChange={handleInput}
                        placeholder="Telefonnummer"
                    />
                    <br />
                    <textarea
                        type="text"
                        name="message"
                        value={formInput.message}
                        onChange={handleInput}
                        placeholder="Ditt meddelande"
                    />
                    <br />
                    {/* Knapp för att skicka formulärdata */}
                    <button id="form-btn" type="submit">
                        skicka
                    </button>
                </form>
            </section>
            <section className="contact-text">
                <p>
                    Om du har några frågor eller om ni skulle vara intresserad
                    att låta mig komma och utföra min LIA praktik hos er till nu
                    till hösten 2024 så är det bara att kontakta mig via
                    formuläret!
                    <br />
                    <br />
                    Jag försöker alltid besvara alla meddelanden inom 1
                    arbetsdag. Som standard kommer du få svar skickat till din
                    e-post adress, vill du att jag kontaktar dig per telefon
                    vänligen specificera det i ditt meddelande till mig.
                    <br />
                    <br />
                    <br />
                    <br />
                    Tack på förhand,
                    <br />
                    <br />
                    Mvh Emil Nordin
                </p>
            </section>
        </main>
    );
}
