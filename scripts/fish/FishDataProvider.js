const fishCollection = [
    {
        name: "Hercules",
        species: "Discus",
        length: 12,
        harvest_location: "Amazon River Delta",
        diet: "Algae flakes & shrimp pellets",
        image: "https://images.unsplash.com/photo-1548425923-a7d6c37d7f18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Hercules",
        species: "Discus",
        length: 12,
        harvest_location: "Amazon River Delta",
        diet: "Algae flakes & shrimp pellets",
        image: "https://images.unsplash.com/photo-1548425923-a7d6c37d7f18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    
    {
        name: "Shadow",
        species: "Black Ghost Knifefish",
        length: 50,
        harvest_location: "Paraguay-Parana River",
        diet: "Live worms",
        image: "https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Black_Ghost_Knifefish.jpg"
    },
    {
        name: "Shadow",
        species: "Black Ghost Knifefish",
        length: 50,
        harvest_location: "Paraguay-Parana River",
        diet: "Live worms",
        image: "https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Black_Ghost_Knifefish.jpg"
    },
]

// Creates a copy of the first array, which is now a new array
export const useFish = () => {
    return fishCollection.slice()
}

// This gets me a list of fish whose length is divisible by 3
export const holyFish = () => {
    let holyList = []    
    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyList.push(fish)
        }
    }
    return holyList
}

// This gets me a list of fish whose length is divisible by 5 but NOT by 3
export const soldierFish = () => {
    debugger
    let soldierList = []
    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soldierList.push(fish)
        }
    }
    console.log(soldierList)
    return soldierList
}

// The gets me a list of fish that are not divisible by either 3 or 5
export const unHolyFish = () => {
    let unHolyList = []
    for (const fish of fishCollection) {
        if (fish.length % 3 !==0 && fish.length % 5 !== 0) {
            unHolyList.push(fish)
        }
    }
    console.log("probably nothing will go here")
    return unHolyList
}