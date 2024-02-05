console.log('working')
import {board as boarComponent} from "../components/board.js";
const app = $('#app')
$.ajax({
        type:'GET',
        url:`${BASE_URL}:${BASE_PORT}/${ROUTE_BOARDS}`,
        success:function (result) {
            // console.log(result)
            result.sort((a,b)=> a.createdAt < b.createdAt)
            // app.append('<div class="vstack gap-2">')
            let stack = '<div class="vstack gap-2">'
            result.forEach(board => {
                // console.log(board)
                // app.append(`<pre>${JSON.stringify(board).replaceAll(',','\n')}</pre>`)
                // app.append(`<p>${board.title}</p>`)
                stack += boarComponent(board) //.append('<hr>')

            })
            stack += '</div>'
            // app.find('hr:last').remove()
            app.append(stack)
        },
        error: function (xhr, status, err) {
        console.error(xhr, status, err);
        }

    })


