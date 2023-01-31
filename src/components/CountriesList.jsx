import { useState } from "react"
import {Link, useParams} from 'react-router-dom'
import countriesData from "../countries.json"

const CountriesList =() =>{
    const [countries, setCountries] = useState(countriesData)

return (
<div>
{countries.map((countrie) => {
                return (
                    <div key={countrie._id}>
                        <li> <Link to={countrie.name.common}> {countrie.alpha3Code} </Link></li>
                        
                    </div>
                )
            })}


</div>

)

}
export default CountriesList 
