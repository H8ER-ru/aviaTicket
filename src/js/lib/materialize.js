import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

//init select

const select = document.querySelector('select')
M.FormSelect.init(select)

export function getSelectInstance(element){
    return M.FormSelect.getInstance(element)
}

//init autocomplete
const autocompleteElements = document.querySelectorAll('.autocomplete')
M.Autocomplete.init(autocompleteElements, {
    data:{
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
    }
})

export function getAutocompleteInstance(element){
    return M.Autocomplete.getInstance(element)
}

//init datepicker
const datepickers = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepickers, {
    showClearBtn: true
});

export function getDatePickerInstance(element){
    return M.Datepicker.getInstance(element)
}