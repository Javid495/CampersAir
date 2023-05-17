import './Components/Lista/lista-customer.js'
import './Components/Modales/modal-customer.js'
import { MenuController } from  './Controllers/menu-controller.js';
const menu = new MenuController();
document.addEventListener('DOMContentLoaded',(e) =>{
    menu.initMenu();
})