function convertCase(text, caseType) {
    if (!text) return "";

    switch (caseType) {

        // sentence case
        case "sentence_case":
            return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

        // lower case
        case "lower_case":
            return text.toLowerCase();

        // UPPER CASE
        case "upper_case":
            return text.toUpperCase();

        // Capitalized Case (Every Word Capitalized)
        case "capitalized_case":
            return text
                .toLowerCase()
                .replace(/\b\w/g, c => c.toUpperCase());

        // aLtErNaTiNg cAsE
        case "alternating_case":
            return [...text]
                .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
                .join("");

        // Title Case (excluding small words)
        case "title_case": {
            const smallWords = ["and", "or", "but", "a", "an", "the", "in", "on", "with", "of"];
            return text
                .toLowerCase()
                .split(" ")
                .map((word, i) =>
                    smallWords.includes(word) && i !== 0
                        ? word
                        : word.charAt(0).toUpperCase() + word.slice(1)
                )
                .join(" ");
        }

        // InVeRsE CaSe (flip each letter)
        case "inverse_case":
            return [...text]
                .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
                .join("");

        // snake_case
        case "snake_case":
            return text
                .trim()
                .replace(/\s+/g, "_")
                .toLowerCase();

        // kebab-case
        case "kebab_case":
            return text
                .trim()
                .replace(/\s+/g, "-")
                .toLowerCase();

        // PascalCase
        case "pascal_case":
            return text
                .toLowerCase()
                .replace(/(^\w| \w)/g, c => c.trim().toUpperCase());

        // camelCase
        case "camel_case":
            const pascal = text
                .toLowerCase()
                .replace(/(^\w| \w)/g, c => c.trim().toUpperCase());
            return pascal.charAt(0).toLowerCase() + pascal.slice(1);

        // CONSTANT_CASE
        case "constant_case":
            return text
                .trim()
                .replace(/\s+/g, "_")
                .toUpperCase();

        // dot.case
        case "dot_case":
            return text
                .trim()
                .replace(/\s+/g, ".")
                .toLowerCase();

        // path/case
        case "path_case":
            return text
                .trim()
                .replace(/\s+/g, "/")
                .toLowerCase();

        default:
            return text;
    }
}

export default convertCase;