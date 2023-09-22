const result = document.getElementById('name');

const name = ['jeffery', 'Emmanuel', 'jefferson', 'lil wayne', 'lil duck','j.cole','timaya','Drake','Purity','Billie Eilish','perezimo','Presley','Mr Bright'];

function generate() {
    const randomnames = getRandomNames();
    result.innerHTML = randomnames;
}

function getRandomNames() {
    const randomIndex = Math.floor(Math.random() * name.length);
    return name[randomIndex]
}

function reset() {
    const reset = null;
    result.innerHTML = reset;

}