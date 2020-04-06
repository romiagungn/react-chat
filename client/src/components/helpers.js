/**
 * Given a color, return the complementary color.
 */
// export const complementaryColor = (color) => {
//     const hexColor = color.replace('#', '0x');

//     return `#${('000000' + (('0xffffff' ^ hexColor).toString(16))).slice(-6)}`;
// };

/**
 * Generate a random color and return it.
 */
export const randomColor = () => {
    const letters = '0123456789abcdef';
    let color = '#';

    for (let i = 0; i < 6; i += 1) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
};

