import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

//init

const select = document.querySelector('select')
M.FormSelect.init(select)

export function getSelectInstance(element){
    return M.FormSelect.getInstance(element)
}