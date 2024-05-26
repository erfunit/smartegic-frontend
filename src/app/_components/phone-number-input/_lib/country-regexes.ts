export const countryRegexes: { [key: string]: RegExp } = {
    "1": /^[2-9]\d{2}[2-9]\d{2}\d{4}$/, // USA
    "44": /^7\d{9}$/, // UK
    "98": /^(9[0-39]\d{8})$/, // Iran (example regex)
};
