import getRandomInt from '../helpers/getRandomInt';

/**
 * Renvoie la liste des différents modes de jeu
 */
const modes = {
    /**
     * Création d'une question sur les additions
     */
    addition: function () {
        let number1 = getRandomInt(1, 10);
        let number2 = getRandomInt(1, 10);
        return {
            text: `${number1} + ${number2} = ?`,
            expected: number1 + number2
        }
    },
    /**
     * Création d'une question sur les multiplications
     */
    soustraction: function () {
        let number1 = getRandomInt(1, 10);
        let number2 = getRandomInt(1, 10);
        // swap
        if (number1 < number2) {
            let temp = number1;
            number1 = number2;
            number2 = temp;
        }
        return {
            text: `${number1} - ${number2} = ?`,
            expected: number1 - number2
        }
    },
    /**
     * Création d'une question sur les multiplications
     */
    multiplication: function () {
        let number1 = getRandomInt(1, 10);
        let number2 = getRandomInt(1, 10);
        return {
            text: `${number1} x ${number2} = ?`,
            expected: number1 * number2
        }
    },
    /**
     * Création d'une question sur les double
     */
    double: function () {
        let number = getRandomInt(1, 50);
        return {
            text: `2 x ${number} = ?`,
            expected: 2 * number
        }
    }
};

export default modes;
