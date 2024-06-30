import {renderBoards} from "./board.js";

export const navbarComponent = () => {
    // let ulElement = `<ul class="nav my-3" id="nav" >`
    // const navBoards = `
    //     <li class="nav-item">
    //         <a class="nav-link" href="#" id="boardsNav">boards</a>
    //     </li>
    // `
    // ulElement += navBoards + '</ul>'
    return `
    <nav class="navbar navbar-expand-sm bg-body-tertiary">
        <div class="container-fluid">
            <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNavDropdown" 
                aria-controls="navbarNavDropdown" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item" >
                        <a class="nav-link " id="navBoards" href="#">boards</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`
}



export const navbarClickHandler = (e) => {
    flushApp()
    console.log('clicking')
    console.log(e.target)
    if(e.target.id === 'navBoards')renderBoards()
}

const flushApp = () => {
    $('#app').empty()
}

export const renderNavbar = (target = $('#header')) => {
    target.append(navbarComponent())
    $('#navBoards').on('click', navbarClickHandler)
    // console.log($('#navBoards'))
    console.log( 'adding clickhandler')
    // .on('click',navbarClickHandler)
}
