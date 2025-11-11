// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends 
// en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

// Ecris ton code après cette ligne
function whoIsAdmin(users) {
    let adminNames = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].estAdmin) {
            adminNames.push(users[i].nom);
        }
    }
    return adminNames;

}

const users = [
  { nom: "Alice", age: 25, estAdmin: true },
  { nom: "Bob", age: 30, estAdmin: false },
  { nom: "Charlie", age: 22, estAdmin: true },
  { nom: "David", age: 28, estAdmin: false },
  { nom: "Eve", age: 35, estAdmin: true }
];

console.log(whoIsAdmin(users)+" sont admin"); // Devrait afficher : ["Alice", "Charlie", "Eve"]
// Ne pas modifier la ligne suivante
module.exports = { whoIsAdmin }
