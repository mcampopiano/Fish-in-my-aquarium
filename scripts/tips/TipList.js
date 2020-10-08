import {useTips} from "./TipDataProvider.js"
import {tip} from "./Tip.js"

export const PopulateTips = () => {
    const tipsList = useTips();
    const contentContainer = document.querySelector(".care")

    let tipsHTMLReps = ""
    for (const advice of tipsList) {
        tipsHTMLReps += tip(advice)
    }

    contentContainer.innerHTML += `
    ${tipsHTMLReps}
    `

}