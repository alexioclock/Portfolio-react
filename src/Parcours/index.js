import "./parcours.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Parcours() {

    useEffect(() => {
        Aos.init({duration:2000});
    }, []);

  return (
    <div className="parcours-container" id="experiences">
        <div className="parcours-content">
            <h1 data-aos="fade-left">Expériences professionnelles</h1>
                <h2 data-aos="fade-left">Stage Développeur Front-End chez Cénotélie // 6 mois</h2>
                    <p data-aos="fade-right">Re-conception, développement, intégration, test maintenance corrective et évolutive, mise en production. Technos : React, TypeScript</p>
                <h2 data-aos="fade-left">Formation O'clock développeur web fullstack // 6 mois</h2> 
                    <p data-aos="fade-right">Formation à temps plein avec la spécialité React/Redux</p>
                    <p data-aos="fade-right">Consulter tout le programme <a href="https://oclock.io/formations/developpeur-web" target="_blank" rel="noreferrer">ici</a></p>
                <h2 data-aos="fade-left">Rédaction web SEO // 5 ans</h2>
                    <p data-aos="fade-right">D'abord sous contrat puis en indépendant, je me suis occupé de la gestion du catalogue, définition de la stratégie de contenu, analyse de l'audience et du positionnement, optimisation SEO, analyse de l'audience et du positionnement (Google Analytics, SEM RUSH, Search Console)</p>
        </div>
    </div>
  );
}

export default Parcours;
