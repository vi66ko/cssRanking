// place files you want to import through the `$lib` alias in this folder.


function getAllCssProperties(css) {
    const matches = [];
    const regExAllBetweenCurlyBrackets = /{([^{}]+)}/g;
    let match;

    while ((match = regExAllBetweenCurlyBrackets.exec(css)) !== null) {
        const cssProperties = match[1].split(';').map((prop) => prop.split(':')[0].trim());
        matches.push(...cssProperties);
    }

    return matches.filter(item => item !== '')
}


export {
    getAllCssProperties,
}