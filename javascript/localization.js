let langs = document.querySelector(".langs");
let languageLink = document.querySelectorAll(".languageLink, .languageLinkActive");

let dixitWorldDesc = document.querySelector("#dixitWorldDesc");
let techTitle = document.querySelectorAll(".techTitle");
let mastersQuizDesc = document.querySelector("#mastersQuizDesc");
let mastersQuizTeam = document.querySelector("#mastersQuizTeam");
let taskTitle = document.querySelectorAll(".taskTitle");
let mastersQuizTask1 = document.querySelector("#mastersQuizTask1");
let mastersQuizTask2 = document.querySelector("#mastersQuizTask2");
let mastersQuizTask3 = document.querySelector("#mastersQuizTask3");
let mastersQuizTask4 = document.querySelector("#mastersQuizTask4");
let mastersQuizTask5 = document.querySelector("#mastersQuizTask5");
let mastersQuizTask6 = document.querySelector("#mastersQuizTask6");
let touchDownDesc = document.querySelector("#touchDownDesc");
let team = document.querySelectorAll(".team");
let touchDownTask1 = document.querySelector("#touchDownTask1");
let touchDownTask2 = document.querySelector("#touchDownTask2");
let touchDownTask3 = document.querySelector("#touchDownTask3");
let touchDownTask4 = document.querySelector("#touchDownTask4");
let touchDownTask5 = document.querySelector("#touchDownTask5");
let touchDownTask6 = document.querySelector("#touchDownTask6");
let towerMayhemDesc = document.querySelector("#towerMayhemDesc");
let towerMayhemTask1 = document.querySelector("#towerMayhemTask1");
let towerMayhemTask2 = document.querySelector("#towerMayhemTask2");
let towerMayhemTask3 = document.querySelector("#towerMayhemTask3");
let towerMayhemTask4 = document.querySelector("#towerMayhemTask4");
let vitrailBusterDesc = document.querySelector("#vitrailBusterDesc");
let vitrailBusterTask1 = document.querySelector("#vitrailBusterTask1");
let vitrailBusterTask2 = document.querySelector("#vitrailBusterTask2");
let vitrailBusterTask3 = document.querySelector("#vitrailBusterTask3");
let vitrailBusterTask4 = document.querySelector("#vitrailBusterTask4");
let vitrailBusterTask5 = document.querySelector("#vitrailBusterTask5");
let vitrailBusterTask6 = document.querySelector("#vitrailBusterTask6");
let underwaterGarbageManDesc = document.querySelector("#underwaterGarbageManDesc");
let underwaterGarbageManTask1 = document.querySelector("#underwaterGarbageManTask1");
let underwaterGarbageManTask2 = document.querySelector("#underwaterGarbageManTask2");
let underwaterGarbageManTask3 = document.querySelector("#underwaterGarbageManTask3");
let uctDesc = document.querySelector("#uctDesc");
let uctTask1 = document.querySelector("#uctTask1");
let uctTask2 = document.querySelector("#uctTask2");
let uctTask3 = document.querySelector("#uctTask3");
let uctTask4 = document.querySelector("#uctTask4");
let uctTask5 = document.querySelector("#uctTask5");
let duplicateDesc = document.querySelector("#duplicateDesc");
let duplicateTask1 = document.querySelector("#duplicateTask1");
let duplicateTask2 = document.querySelector("#duplicateTask2");
let duplicateTask3 = document.querySelector("#duplicateTask3");
let duplicateTask4 = document.querySelector("#duplicateTask4");
let yourZooDesc = document.querySelector("#yourZooDesc");
let yourZooTask1 = document.querySelector("#yourZooTask1");
let yourZooTask2 = document.querySelector("#yourZooTask2");


     languageLink.forEach(el=>{
     el.addEventListener("click", ()=>{

          let activeLanguage = langs.querySelector(".languageLinkActive");
          console.log("pass");
          activeLanguage.classList.remove("languageLinkActive");
          activeLanguage.classList.add("languageLink");
          el.classList.add("languageLinkActive");

          let languageCode = el.getAttribute("language");

          dixitWorldDesc.textContent = data[languageCode].dixitWorldDesc
          techTitle.forEach((e) => e.textContent = data[languageCode].techTitle)
          mastersQuizDesc.textContent = data[languageCode].mastersQuizDesc
          mastersQuizTeam.textContent = data[languageCode].mastersQuizTeam
          mastersQuizTask1.textContent = data[languageCode].mastersQuizTask1
          mastersQuizTask2.textContent = data[languageCode].mastersQuizTask2
          mastersQuizTask3.textContent = data[languageCode].mastersQuizTask3
          mastersQuizTask4.textContent = data[languageCode].mastersQuizTask4
          mastersQuizTask5.textContent = data[languageCode].mastersQuizTask5
          mastersQuizTask6.textContent = data[languageCode].mastersQuizTask6
          touchDownDesc.textContent = data[languageCode].touchDownDesc
          team.forEach((e) => e.textContent = data[languageCode].team)
          taskTitle.forEach((e) => e.textContent = data[languageCode].taskTitle)
          touchDownTask1.textContent = data[languageCode].touchDownTask1
          touchDownTask2.textContent = data[languageCode].touchDownTask2
          touchDownTask3.textContent = data[languageCode].touchDownTask3
          touchDownTask4.textContent = data[languageCode].touchDownTask4
          touchDownTask5.textContent = data[languageCode].touchDownTask5
          touchDownTask6.textContent = data[languageCode].touchDownTask6
          towerMayhemDesc.textContent = data[languageCode].towerMayhemDesc
          towerMayhemTask1.textContent = data[languageCode].towerMayhemTask1
          towerMayhemTask2.textContent = data[languageCode].towerMayhemTask2
          towerMayhemTask3.textContent = data[languageCode].towerMayhemTask3
          towerMayhemTask4.textContent = data[languageCode].towerMayhemTask4
          vitrailBusterDesc.textContent = data[languageCode].vitrailBusterDesc
          vitrailBusterTask1.textContent = data[languageCode].vitrailBusterTask1
          vitrailBusterTask2.textContent = data[languageCode].vitrailBusterTask2
          vitrailBusterTask3.textContent = data[languageCode].vitrailBusterTask3
          vitrailBusterTask4.textContent = data[languageCode].vitrailBusterTask4
          vitrailBusterTask5.textContent = data[languageCode].vitrailBusterTask5
          vitrailBusterTask6.textContent = data[languageCode].vitrailBusterTask6
          underwaterGarbageManDesc.textContent = data[languageCode].underwaterGarbageManDesc
          underwaterGarbageManTask1.textContent = data[languageCode].underwaterGarbageManTask1
          underwaterGarbageManTask2.textContent = data[languageCode].underwaterGarbageManTask2
          underwaterGarbageManTask3.textContent = data[languageCode].underwaterGarbageManTask3
          uctDesc.textContent = data[languageCode].uctDesc
          uctTask1.textContent = data[languageCode].uctTask1
          uctTask2.textContent= data[languageCode].uctTask2
          uctTask3.textContent = data[languageCode].uctTask3
          uctTask4.textContent = data[languageCode].uctTask4
          uctTask5.textContent = data[languageCode].uctTask5
          duplicateDesc.textContent = data[languageCode].duplicateDesc
          duplicateTask1.textContent = data[languageCode].duplicateTask1
          duplicateTask2.textContent = data[languageCode].duplicateTask2
          duplicateTask3.textContent = data[languageCode].duplicateTask3
          duplicateTask4.textContent = data[languageCode].duplicateTask4
          yourZooDesc.textContent = data[languageCode].yourZooDesc
          yourZooTask1.textContent = data[languageCode].yourZooTask1
          yourZooTask2.textContent = data[languageCode].yourZooTask2

          
     })
})

let data = {
     fr: {
        dixitWorldDesc: "Adaptation sur mobile(Android/IOS) du jeu de société Dixit",
        techTitle: "Langage/technologie utilisées :",
        mastersQuizDesc: "Masters Quiz est un jeu sur mobile développé par Ikigai, un groupe spécialisé dans le développement de jeux éducatifs au sein de Sorbonne Université. Ce jeu est à destination des étudiants de Sorbonne Université. Le but est de les aider à réviser, en jouant à un jeu qui les pousse à revenir pour l'amusement. ",
        mastersQuizTeam:"L'équipe d'Ikigai",
        taskTitle:"Tâches principales :",
        mastersQuizTask1:"Développment du mode multijoueur",
        mastersQuizTask1:"Ajout de fonctionnalités sur les modes Challenge et Révision",
        mastersQuizTask3:"Développement du mode Animation",
        mastersQuizTask4:"Correction des éventuels bugs",
        mastersQuizTask5:"Test",
        mastersQuizTask6:"Optimisation",
        touchDownDesc:"TouchDown est un jeu multijoueur en réseau qui mélange les genres capture de drapeau et tower defense grâce à son système de phases, qui se décompose en une phase pour poser des pièges et une phase de gameplay dynamique où l'on doit apporter un cristal dans le but adverse : le but étant de marquer le plus de point dans le temps imparti ou d'arriver à dix buts. Pour cela, on incarne l'un des trois personnages disponibles. Chacun possède trois sorts qui lui sont propres et deux pièges communs à tous les personnages. Les combats se font en équipe de tailles variables, et la carte s'adapte au nombre de joueurs en changeant de taille. Pour ajouter une dimension de découverte à notre jeu et que chaque partie soit unique, la carte est générée aléatoirement grâce à un système de blocs préfaits.",
        team:"Equipe :",
        touchDownTask1:"Conception du jeu",
        touchDownTask2:"Réseau / Lobby",
        touchDownTask3:"Barre de vie",
        touchDownTask4:"Création du Compteur et du Score",
        touchDownTask5:"Gestion du piège de glace",
        touchDownTask6:"Création de la phase \"Inter-manche\"",
        towerMayhemDesc:"Tower Mahyem est un jeu en 3D en réseau crée durant la WonderJam d'hiver. Le jeu devait respecter les thèmes : multijoueur, puzzle et stratégie et le thème : ordre et désordre. Ce jeu propose de construire votre tour en achetant différents blocs et en les posant, le but étant d'atteindre une certaine hauteur en premier. La particularité est que durant la partie il y a une phase où vous pouvez poser un bloc dans la zone adverse pour l'empêcher d'atteindre l'objectif.",
        towerMayhemTask1:"Conception du jeu",
        towerMayhemTask2:"Mise en place de photon / Création du lobby",
        towerMayhemTask3:"Contrôles Utilisateurs",
        towerMayhemTask4:"Création des blocs et des cartes",
        vitrailBusterDesc:"Vitrail buster est un shooter en 2D entrecoupé de phase puzzle créé dans le cadre d'un projet scolaire. Le joueur progresse dans un univers où les fantômes volent la couleur du monde. Pour sauver ce monde et contrecarrer les plans du chef des fantômes, le héros va devoir affronter ces derniers grâce à une arme laser, le vitrail blaster. Il tire un rayon qui prend la couleur du vitrail en arrière-plan du joueur. En fonction de la couleur du tir, le joueur pourra éliminer les ennemis de la couleur correspondante.",
        vitrailBusterTask1:"Conception du jeu",
        vitrailBusterTask2:"Intelligence artificielle des ennemis",
        vitrailBusterTask3:"Menu",
        vitrailBusterTask4:"Gestion de la musique et du son (asset)",
        vitrailBusterTask5:"Mécanique du boss",
        vitrailBusterTask6:"Mécanique de blocage des salles",
        underwaterGarbageManDesc:"Underwater garbage man, projet en 2D créé pour la WonderJam d'automne. Garbage man est un super héros qui s'est reconverti à l'écologie depuis que le crime n'existe plus dans son monde. Désormais il utilise ses pouvoirs pour nettoyer l'océan le plus rapidement possible. Les thèmes course, arcade et puzzle étaient imposés.",
        underwaterGarbageManTask1:"Conception du jeu",
        underwaterGarbageManTask2:"Inventaire",
        underwaterGarbageManTask3:"Développement du pouvoir d'attirance",
        uctDesc:"UCT, un contre tous UCT est un projet en 3D qui a été réalisé en autoentrepreneur dans le cadre de notre stage en partenariat avec Igloo Spirit. UCT, Un Contre tous, propose une expérience asymétrique de combat en temps réel. Un joueur incarne une créature légendaire avec un casque de réalité virtuelle, les autres joueurs, eux joueront les aventuriers et l'affrontent sur leurs ordinateurs. Le joueur en VR peut alors apprécier de jouer son boss favori, ressentir et utiliser sa toute-puissance. Le tout immergé dans la réalité virtuelle, utilisant ses mains pour frapper et lancer des capacités. Les joueurs PC seront alors confrontés à un réel challenge : celui d'affronter grâce à leurs combos, non pas une IA prévisible mais un joueur qui, comme eux, s'adapte à leurs stratégies !",
        uctTask1:"Conception du jeu",
        uctTask2:"Interface côté joueurs PC en réseau",
        uctTask3:"Fonctionnalité côté joueurs PC en réseau",
        uctTask4:"Création de sorts côté joueurs PC",
        uctTask5:"Développement de quelques combos en réseau",
        duplicateDesc:"Duplicate est un projet scolaire en 3D qui a été créé dans le but de participer à l'Imagine Cup concours organisé par Microsoft en 2016-2017. Duplicate est un jeu de type puzzle sur le thème de la solitude. Duplicate se base sur une mécanique de création de double temporel pour résoudre les puzzles. Le thème de la solitude est transmis grâce à l'histoire qui conte une expérience comportementale pour montrer l'importance du travail en groupe. Plus d'informations dans la vidéo.",
        duplicateTask1:"Etude de marché",
        duplicateTask2:"Conception du jeu",
        duplicateTask3:"Développement de plusieurs mécaniques",
        duplicateTask4:"Création du tutoriel",
        yourZooDesc:"Ce jeu de gestion en 2D a été créé dans le cadre d’un projet scolaire. Il consiste à gérer un zoo. Le joueur pourra acheter divers animaux parmi ceux proposés en boutique et devra faire attention à leur finance pour éviter la faillite.",
        yourZooTask1:"Conception du jeu",
        yourZooTask2:"Créations des fonctions liées à l'économie",
     },
     en: {
        dixitWorldDesc: "Mobile adapation(Android/IOS) of board game Dixit",
        techTitle: "Language/technology used :",
        mastersQuizDesc: "Masters Quiz is a mobile game developed by Ikigai, a group specialising in the development of educational games at Sorbonne University. The game is aimed at Sorbonne University students. The aim is to help them revise by playing a game that keeps them coming back for more.",
        mastersQuizTeam:"Ikigai Team",
        taskTitle:"Main tasks",
        mastersQuizTask1:"Development of multiplayer mode",
        mastersQuizTask2:"New features added to Challenge and Review modes",
        mastersQuizTask3:"Development of Animation mode",
        mastersQuizTask4:"Fix bugs",
        mastersQuizTask5:"Test",
        mastersQuizTask6:"Optimization",
        touchDownDesc:"TouchDown is a networked multiplayer game that blends the capture-the-flag and tower defense genres thanks to its phase system, which breaks down into a phase for setting traps and a dynamic gameplay phase where you have to bring a crystal into the opponent's goal: the aim being to score the most points in the allotted time or reach ten goals. To do this, you play as one of three characters. Battles are fought in teams of varying sizes, and the map adapts to the number of players by changing size. To add a dimension of discovery to our game and make each game unique, the map is randomly generated thanks to a system of pre-made blocks.",
        team:"Team :",
        touchDownTask1:"Game design",
        touchDownTask2:"Network / Lobby",
        touchDownTask3:"Life bar",
        touchDownTask4:"Counter and Score creation",
        touchDownTask5:"Ice trap creation",
        touchDownTask6:"Creation of the \"Inter-channel\" phase",
        towerMayhemDesc:"Tower Mahyem is a 3D online game created during the Winter WonderJam. The game had to respect the themes: multiplayer, puzzle and strategy and the theme: order and disorder. In this game, you build your tower by buying different blocks and placing them on top of each other, the aim being to reach a certain height first. The special feature is that during the game there's a phase where you can place a block in the opponent's zone to prevent him from reaching the objective.",
        towerMayhemTask1:"Game design",
        towerMayhemTask2:"Photon setup / Lobby creation",
        towerMayhemTask3:"User controls",
        towerMayhemTask4:"Creating blocks and cards",
        vitrailBusterDesc:"Vitrail buster is a 2D shooter interspersed with puzzle phases, created as part of a school project. The player progresses in a universe where ghosts steal the color of the world. To save this world and thwart the plans of the ghosts' leader, the hero must confront them with a laser weapon, the stained-glass blaster. He fires a beam that takes on the color of the stained-glass window in the player's background. Depending on the color of the shot, the player can eliminate enemies of the corresponding color.",
        vitrailBusterTask1:"Game design",
        vitrailBusterTask2:"Artificial intelligence of enemies",
        vitrailBusterTask3:"Menu",
        vitrailBusterTask4:"Music and sound management (asset)",
        vitrailBusterTask5:"Boss mechanics",
        vitrailBusterTask6:"Room blocking mechanism",
        underwaterGarbageManDesc:"Underwater garbage man, 2D project created for the fall WonderJam. Garbage man is a superhero who has turned to ecology since crime no longer exists in his world. He now uses his powers to clean up the ocean as quickly as possible. Themes included racing, arcade and puzzle.",
        underwaterGarbageManTask1:"Game design",
        underwaterGarbageManTask2:"Inventory",
        underwaterGarbageManTask3:"Developing the power of attraction",
        uctDesc:"UCT, Un contre tous UCT is a 3D project created as part of our internship with Igloo Spirit. UCT, Un Contre tous, is an asymmetrical real-time combat experience. One player takes on the role of a legendary creature using a virtual reality headset, while other players play the role of adventurers and battle it out on their computers. The VR player can then enjoy playing his favorite boss, feeling and using his omnipotence. All immersed in virtual reality, using their hands to strike and throw abilities. PC gamers will be faced with a real challenge: using their combos to face not a predictable AI, but a player who, like them, adapts to their strategies!",
        uctTask1:"Game design",
        uctTask2:"Interface for networked PC players",
        uctTask3:"Networked PC player functionality",
        uctTask4:"Spell creation for PC players",
        uctTask5:"Development of some network combos",
        duplicateDesc:"Duplicate is a 3D school project that was created with the aim of participating in the Imagine Cup competition organized by Microsoft in 2016-2017. Duplicate is a puzzle game on the theme of solitude. Duplicate relies on a time-double creation mechanic to solve puzzles. The theme of solitude is conveyed through the story, which recounts a behavioral experiment to show the importance of group work. More information in the video.",
        duplicateTask1:"Market research",
        duplicateTask2:"Game design",
        duplicateTask3:"Development of several mechanics",
        duplicateTask4:"Tutorial creation",
        yourZooDesc:"This 2D management game was created as part of a school project. The aim is to manage a zoo. The player can buy a variety of animals from the store, and must keep an eye on their finances to avoid bankruptcy.",
        yourZooTask1:"Game design",
        yourZooTask2:"Creation of business-related functions",
     }
}