const age = prompt('Quel est votre âge ?');

age >= 18 && alert('Vous êtes majeur.');
age < 18 && alert('Bonjour simple user.');

const role = prompt('Quel est votre rôle au sein de la société ?');
const userIsAdultAndAdmin = age >= 18 && role === 'admin';

userIsAdultAndAdmin && alert('Bienvenue admin.');

const mdp = prompt('Veuillez saisir un mot de passe');

userIsAdultAndAdmin && mdp.length > 5 && alert('Bienvenue master user.');
