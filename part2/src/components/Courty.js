import { useState } from "react"
import Detail from "./Detail"

const Country = ({country}) => {
    const [show, setShow] = useState(false)

    const DisplayCountryDetails = () => {
        if (show === false) {
            setShow(true)
        }
    }
    return <>
        <p>
            {country.name}
            <button onClick={DisplayCountryDetails}>show</button>
        </p>
        {show && <Detail country={country}/>}
    </>
}

export default Country