function setInitialScores()
{
    document.getElementById("home-score").textContent = 0;
    document.getElementById("guest-score").textContent = 0;
}

function updateScore(elementId, scoreIncrement)
{
    let element = document.getElementById(elementId);
    let score = Number(element.textContent);
    score += scoreIncrement;
    element.textContent = score;
}

setInitialScores();