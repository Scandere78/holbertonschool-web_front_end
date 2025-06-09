function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {

    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    const btnSpooky = document.createElement('button');
    btnSpooky.textContent = 'Spooky';
    btnSpooky.onclick = spooky;

    const btnDarkMode = document.createElement('button');
    btnDarkMode.textContent = 'Dark mode';
    btnDarkMode.onclick = darkMode;

    const btnScreamMode = document.createElement('button');
    btnScreamMode.textContent = 'Scream mode';
    btnScreamMode.onclick = screamMode;

    document.body.appendChild(btnSpooky);
    document.body.appendChild(btnDarkMode);
    document.body.appendChild(btnScreamMode);
}

main();
