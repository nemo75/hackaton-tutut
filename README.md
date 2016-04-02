# hackaton-tutut

Le service qui vous permet de mutualiser l'utilisation de véhicules entre particuliers afin de ramener en centre ville vos achats volumineux.

## Instructions

1. `git clone https://github.com/nemo75/hackaton-tutut.git`
2. `npm install`
3. `TuTuT !!!`

# Technos utilisées : 

. HTML/CSS
. JQuery pour l'interactivité.
. Nodejs/socket.io pour simuler la prise en charge des annonces en temps réel (récupérer les annonces postées et les afficher) 
. Semantic-ui pour le côté responsive.

## A l'avenir : 

. Nous prévoyons d'utiliser un gestionnaire de bases de données afin de gérer les inscriptions et de stocker les annonces.
Il existera une table Utilisateurs qui sera renseignée lors de l'inscription des usagers du site. Elle contiendra les informations suivantes : 

. ID utilisateur
. Nom
. Prénom
. Adresse
. Email
. N°Téléphone
. Possède un véhicule ou non. Si oui, quelle taille.

Une autre table annonces_drivers contiendra les informations renseignées dans le formulaire de driver, à savoir : 

. Nom prénom
. Disponibilité
. Distance que le driver est prêt à parcourir
. Taille de son véhicule

Et bien sûr une table annonces_livres qui contiendra les informations suivantes : 

. Nom prénom
. Disponibilité
. Adresse de départ
. Adresse d'arrivée
. Objets à transporter
. Nombre d'objets à transporter

Nous prévoyons d'implémenter GoggleAnalytics, et un système de paiement lorsque l'utilisateur cliquera sur le bouton "réserver", éventuellement avec Mogopay, un startup locale.


TuTuT !!!!
