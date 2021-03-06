/**
 * Get mode title (ucfirst)
 *
 * @param {string} modeName
 */
function getModeTitle(modeName) {
    return modeName.charAt(0).toUpperCase() + modeName.slice(1)
}

export default getModeTitle;
