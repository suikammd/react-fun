import Country from './Courty'
import './Detail'
import Detail from './Detail'

const Display = ({display, keyword}) => {
    if (display.length === 0 && keyword.length !== 0) {
        return <p>No matching countries</p>
    } 

    if (display.length === 0 && keyword.length === 0) {
        return <p></p>
    }

    if (display.length > 10) {
        return <p>Too many matching countries</p>
    }

    if (display.length === 1) {
        return <Detail country={display[0]}/>
    }
    return <>
            {display.map((item) => <Country key={item.name} country={item}/>)}
        </>
}

export default Display