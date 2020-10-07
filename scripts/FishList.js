import {useFish} from "./FishDataProvider.js"
import {Fish} from "./fish.js"

export const FishList = () => {
    const contentElement = document.querySelector(".fish")
    const fishes = useFish()

    let fishHTMLRepresentations = ""
    for (const fishy of fishes) {
        fishHTMLRepresentations += Fish(fishy)
    }

    contentElement.innerHTML += `
            ${fishHTMLRepresentations}
        
        `
}