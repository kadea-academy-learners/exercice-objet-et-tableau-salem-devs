// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,
//   notes: number[]
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue.

function showStudentBulletin(eleves) {
    let bulletins = [];

    for (let i = 0; i < eleves.length; i++) {
        const eleve = eleves[i];
        let moyenne = 0;

        if (eleve.notes && eleve.notes.length > 0) {
            const somme = eleve.notes.reduce((acc, note) => acc + note, 0);
            moyenne = parseFloat((somme / eleve.notes.length).toFixed(2));
        }

        let commentaire = "";
        if (moyenne >= 16) {
            commentaire = "Excellent";
        } else if (moyenne >= 14) {
            commentaire = "Très Bien";
        } else if (moyenne >= 12) {
            commentaire = "Bien";
        } else if (moyenne >= 10) {
            commentaire = "Passable";
        } else {
            commentaire = "À revoir";
        }

        bulletins.push({
            nom: eleve.nom,
            moyenne: moyenne,
            commentaire: commentaire
        });
    }

    return bulletins;
}

// Ne pas modifier la ligne suivante
module.exports = { showStudentBulletin };
