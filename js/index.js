console.log('working')
import {board as boarComponent} from "../components/board.js";
const app = $('#app')
$.ajax({
        type:'GET',
        url:`${BASE_URL}:${BASE_PORT}/${ROUTE_BOARDS}`,
        success:function (result) {
            console.log(result)
            result.sort((a,b)=> a.createdAt < b.createdAt)
            app.append('<div class="ml-4"></div>')
            result.forEach(board => {
                console.log(board)
                // app.append(`<pre>${JSON.stringify(board).replaceAll(',','\n')}</pre>`)
                // app.append(`<p>${board.title}</p>`)
                app.append(boarComponent(board)).append('<hr>')

            })
            app.find('hr:last').remove()
            app.append('</div>')
        },
        error: function (xhr, status, err) {
        console.error(xhr, status, err);
        }

    })


