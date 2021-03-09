const Detail = ({country}) => {
    console.log(country)
    return <>
        <h1>{country.name}</h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h2>languages</h2>
        <ul>
            {country.languages.map((language) => <li key={language.name}>{language.name}</li>)}
        </ul>
        <img alt='' src={country.flag} style={{width: 200, height: 200}}/>
    </>
}

export default Detail