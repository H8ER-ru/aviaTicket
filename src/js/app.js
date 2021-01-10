import '../css/style.css'
import locations from "./store/location";
import './lib'
import formUI from "./views/form";
import currencyUI from "./views/currency";

document.addEventListener('DOMContentLoaded', () => {
    initApp()
    const form = formUI.form

    //events
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        onFormSubmit()

    })

    //handlers
    async function initApp(){
        await locations.init()
        formUI.setAutoCompleteData(locations.shortCitiesList)
    }
    async function onFormSubmit() {
        //take data from inputs
        const origin = locations.getCityCodeByKey( formUI.originValue )
        const destination = locations.getCityCodeByKey(formUI.destinationValue)
        const depart_date = formUI.departDateValue
        const return_date = formUI.returnDateValue
        const currency = currencyUI.currencyValue
        console.log(origin, destination,depart_date, return_date)
        await locations.fetchTickets({
            origin,destination,depart_date,return_date, currency
        })
    }
})