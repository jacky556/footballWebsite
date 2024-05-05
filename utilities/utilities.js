import { navBarRoutes } from "../components/Navbar/Constants";

export const hideAllNavBar = () => {
    for (let index = 0; index < navBarRoutes.length; index++) {
        const bottomRow = document.getElementById(`bottomRow${index}`)
        bottomRow.style.top = `0px`;
        bottomRow.style.opacity = 0;  
    }
}