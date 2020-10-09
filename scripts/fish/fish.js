// Renders individual fish objects in HTML

export const Fish = (fishObj) => {
    return `
    <div class="fish-card">
        <div class="fish__item">
            <img src=${fishObj.image}>
            <p>Species: ${fishObj.species}</p>
            <p>Length: ${fishObj.length} cm </p>
            <p>Name: ${fishObj.name}</p>
            <p>Harvest Location: ${fishObj.harvest_location}</p>
            <p>Diet: ${fishObj.diet} </p>
        </div>
    </div>`
}