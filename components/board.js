import {errorComponent} from "../utilityComponents/errorComponent.js";

export const boardComponent = (board) => {
    const creationDate = new Date(board.createdAt || Date.now())
        .toLocaleString('de-DE')
        .replace(', ','@')
    const id = board.id
    
    return `
    <div class="card board p-3 mb-3 hover" id="${id}">
        <h2>${board.title}</h2>
        <div class="d-flex">
            <span class="flex-shrink-1">${creationDate}</span>
        </div>
    </div>
`
}

// <!--            <span class="flex-grow-1">by: ${board.createdById.replaceAll('-','-&#8203;')}</span> -->

export const renderBoards = (url = BASE_URL, target = $('#app')) => {
    let res
    $.ajax({
        type:'GET',
        url:`${url}:${BASE_PORT}/${ROUTE_BOARDS}`,
        success:function (result) {
            result.sort((a,b)=> a.createdAt < b.createdAt)
            let stack = '<div class="vstack gap-2">'
            if(!result.length) stack += errorComponent('no boards found')
            result.forEach(board => {
                console.log(board.id)
                stack += boardComponent(board)
            })
            stack += '</div>'
            target.empty()
            target.append(stack)

            res = true
            $('.board').click((e)=> {
                console.log(e.currentTarget.id)
            })
        },
        error: function (xhr, status, err) {
            console.error(xhr, status, err);
            target.append(errorComponent('server@' + this.url + ' did not respond'))
            res = false
        }
    })
    return res
}