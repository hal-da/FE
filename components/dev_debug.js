import {renderBoards} from "./board.js";

export const debugFun = () => {
    const localHostUrl = 'https://localhost'
    const webHost = 'https://api.kanbantastisch.xyz'
    
    if(isDebug) {
        const checkboxes = `
            <li class="navbar-item mt-2">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="host_radio" id="inlineCheckbox1" value="${localHostUrl}" checked>
              <label class="form-check-label" for="inlineCheckbox1" >${localHostUrl}</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="host_radio" id="inlineCheckbox2" value="${webHost}">
              <label class="form-check-label" for="inlineCheckbox2">${webHost}</label>
            </div>
</li>`
        const navBarUl = document.querySelector('.navbar-nav')
        navBarUl.innerHTML += checkboxes
        const hostRadio = document.getElementsByName('host_radio')
        hostRadio.forEach(radio => {
            radio.addEventListener('click', (e) => {
                renderBoards(e.target.value)
            })
        })
    }
}