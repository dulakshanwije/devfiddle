const getTextData = (text) => {
    // Character count (including spaces & punctuation)
    const characters = text.length;

    // Word count (split by spaces/newlines, remove empty items)
    const words = text.trim().split(/\s+/).filter(Boolean).length;

    // Spaces count
    const spaces = (text.match(/ /g) || []).length;

    // Sentence count (split by .,?,!, but ignore empty endings)
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;

    // Paragraph count (split by blank lines)
    const paragraphs = text
        .split(/\n\s*\n/) // Empty line = new paragraph
        .filter(p => p.trim().length > 0).length;

    return {
        characters,
        words,
        spaces,
        sentences,
        paragraphs
    };
};

export default getTextData;
