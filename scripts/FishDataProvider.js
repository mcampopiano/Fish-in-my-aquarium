const fishCollection = [
    {
        name: "Hercules",
        species: "Discus",
        length: "12-15 cm",
        harvest_location: "Amazon River Delta",
        diet: "Algae flakes & shrimp pellets"
    },
    
    {
        name: "Shadow",
        species: "Black Ghost Knifefish",
        length: "50 cm",
        harvest_location: "Paraguay-Parana River",
        diet: "Live worms"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}