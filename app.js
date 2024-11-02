window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    // Calculate the scroll percentage
    const scrollPercentage = scrollPosition / maxScroll;

    // Define start and end colors
    const startColor = [255, 255, 255]; // White
    const endColor = [70, 130, 180]; // SteelBlue

    // Interpolate colors based on scroll percentage
    const red = Math.round(startColor[0] + (endColor[0] - startColor[0]) * scrollPercentage);
    const green = Math.round(startColor[1] + (endColor[1] - startColor[1]) * scrollPercentage);
    const blue = Math.round(startColor[2] + (endColor[2] - startColor[2]) * scrollPercentage);

    // Set background color
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
