const age = prompt('Quel est votre âge ?');

age >= 18 && alert('Vous êtes majeur.');
age < 18 && alert('Bonjour simple user.');

const role = prompt('Quel est votre rôle au sein de la société ?');
const ageRole = age >= 18 && role === 'admin';

ageRole && alert('Bienvenue admin.');

const mdp = prompt('Veuillez saisir un mot de passe');

ageRole && mdp.length > 5 && alert('Bienvenue master user.');
