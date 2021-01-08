import '../css/style.css'
import locations from "./store/location";
import './lib'

locations.init().then(res => {
    console.log(res)
    console.log(locations)
    console.log(locations.getCitiesByCountryCode('PE'))
})