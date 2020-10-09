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
        name: "Brutus",
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
        name: "Star",
        species: "Flowerhorn Cichlid",
        length: 16,
        harvest_location: "Thailand",
        diet: "crickets, mealworms, and frozen shrimp",
        image: "https://c8.alamy.com/comp/2B844R3/the-flowerhorn-fish-aquarium-fish-flower-horn-fish-flowerhorn-cichlid-fish-isolated-on-white-background-this-has-clipping-path-2B844R3.jpg"
    },
    {
        name: "Juve",
        species: "Zebra Plecos",
        length: 3.5,
        harvest_location: "Amazon River",
        diet: "flake food",
        image: "https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Zebra_Plecos.jpg"
    },
    {
        name: "Red",
        species: "Irian Red Rainbow",
        length: 3,
        harvest_location: "West Papua New Guinea",
        diet: "Fish flakes",
        image: "https://c8.alamy.com/comp/2BNBCXN/red-rainbowfish-salmon-red-rainbowfish-new-guinea-red-irian-rainbowfish-glossolepis-incisus-with-nuptial-colouration-2BNBCXN.jpg"
    },
    {
        name: "Blue",
        species: "Kamaka Rainbowfish",
        length: 3,
        harvest_location: "Indonesia",
        diet: "blood worms",
        image: "https://live.staticflickr.com/5484/14353288549_e18f9dedc9_c.jpg"
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
    let soldierList = []
    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soldierList.push(fish)
        }
    }
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
    return unHolyList
}