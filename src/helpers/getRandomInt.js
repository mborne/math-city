/**
 * Renvoie un nombre entier dans l'interval [min,max].
 *
 * @param {number} min
 * @param {number} max
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default getRandomInt;
