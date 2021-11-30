
import keskonmatPic from '../assets/timeline/keskonmate-pic.png';
import patisseriesPic from '../assets/timeline/patisseries-pic.png'
import netflxPic from '../assets/timeline/netflx-pic.png'


let timelineElements = [
    {
        id:1,
        title: "KESKONMATE",
        describe: "Un catalogue de séries dans lequel il est possible de créer ses propres listes de lecture",
        icon: <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-computer-home-office-vitaliy-gorbachev-lineal-vitaly-gorbachev-4.png"/>,
        picture: <img src={keskonmatPic} alt=""/>,
        link:"https://github.com/alexioclock/projet-keskonmate",
    },
    {
        id:2,
        title: "PÂTISSIER",
        describe: "Site vitrine présentant les créations d'un pâtissier",
        icon: <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-computer-home-office-vitaliy-gorbachev-lineal-vitaly-gorbachev-4.png"/>,
        picture: <img src={patisseriesPic} alt=""/>,
        link:"https://github.com/alexioclock/patisseries",
    },
    {
        id:3,
        title: "NETFLX",
        describe: "Une interface épurée présentant des films",
        icon: <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-computer-home-office-vitaliy-gorbachev-lineal-vitaly-gorbachev-4.png"/>,
        picture: <img src={netflxPic} alt=""/>,
        link:"https://github.com/alexioclock/projet-keskonmate",
    },
]

export default timelineElements