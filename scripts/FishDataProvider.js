const fishCollection = [
    {
        name: "Hercules",
        species: "Discus",
        length: "12-15 cm",
        harvest_location: "Amazon River Delta",
        diet: "Algae flakes & shrimp pellets",
        image: "https://images.unsplash.com/photo-1548425923-a7d6c37d7f18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Hercules",
        species: "Discus",
        length: "12-15 cm",
        harvest_location: "Amazon River Delta",
        diet: "Algae flakes & shrimp pellets",
        image: "https://images.unsplash.com/photo-1548425923-a7d6c37d7f18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    
    {
        name: "Shadow",
        species: "Black Ghost Knifefish",
        length: "50 cm",
        harvest_location: "Paraguay-Parana River",
        diet: "Live worms",
        image: "https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Black_Ghost_Knifefish.jpg"
    },
    {
        name: "Shadow",
        species: "Black Ghost Knifefish",
        length: "50 cm",
        harvest_location: "Paraguay-Parana River",
        diet: "Live worms",
        image: "https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Black_Ghost_Knifefish.jpg"
    },
]

export const useFish = () => {
    return fishCollection.slice()
}