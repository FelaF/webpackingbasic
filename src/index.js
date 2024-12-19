import "./styles.css";
import {greeting} from "./greeting.js";
import RoseFlower from "./rose-flower.png";
const image = document.createElement("img")
image.src = RoseFlower
document.body.appendChild(image)
console.log(greeting)

