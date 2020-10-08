import {callPlaces} from "./LocationDataProvider.js"
import {renderLocation} from "./Location.js"

export const LocationsHTML = () => {
    const locationsList = callPlaces();
    const contentContainer = document.querySelector(".location__individual");

    let LocationsHTMLRep = ""

    for (const spot of locationsList) {
        LocationsHTMLRep += renderLocation(spot)
    }

    contentContainer.innerHTML += `
    ${LocationsHTMLRep}
    `
}