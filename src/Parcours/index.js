import "./parcours.scss";

function Parcours() {
  return (
    <div className="parcours-container">
        <div className="parcours-content">
            <h1>Expériences professionnelles</h1>
            <h2>Stage Développeur Front-End chez Cénotélie// 6 mois</h2>
                <p>Re-conception, développement, intégration, test maintenance corrective et évolutive, mise en production</p>
                <p>Technos : React, TypeScript</p>
            <h2>Formation O'clock développeur web fullstack // 6 mois</h2> 
                <p>Formation à temps plein avec la spécialité React/Redux</p>
                <p>Consulter tout le programme <a href="https://oclock.io/formations/developpeur-web" target="_blank" >ici</a></p>

            <h2>Rédaction web SEO// 5 ans</h2>
                <p>D'abord sous contrat puis en indépendant, je me suis occupé de la gestion du catalogue, définition de la stratégie de contenu, analyse de l'audience et du positionnement, optimisation du contenu (SEO), analyse de l'audience et du positionnement (Google Analytics, SEM RUSH, Search Console)</p>
        </div>
    </div>
  );
}

export default Parcours;
