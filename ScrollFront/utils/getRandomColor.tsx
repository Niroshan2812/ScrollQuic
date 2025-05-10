export function getRandomColor() {
    const colors = [
         '#ff6f61', '#6a0572', '#17b978', '#3a86ff',
    '#ffbe0b', '#8338ec', '#ff006e', '#06d6a0',
    ];
    return colors[Math.floor(Math.random()*colors.length)];
}