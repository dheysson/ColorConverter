import { getColorContrast } from "./getColorContrast.js"

const hex = document.querySelector("#hex")

hex.addEventListener("change", (ev) => {
    ChangeBackgroundColor()

    ChangeLightMode(document.body.style.backgroundColor)
})

const ChangeLightMode = (currentColor) => {
    console.log(hex.value)

    if (getColorContrast === "light") {
        
    }
}

const ChangeBackgroundColor = () => {
    if (hex.value[0] === "#") {
        document.body.style.backgroundColor = `${hex.value}`
    } else
        document.body.style.backgroundColor = `#${hex.value}`
}