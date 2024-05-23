export const convertToSlug = (str: string): string => {
    return str.toLowerCase().replace(/\s+/g, '-');
}