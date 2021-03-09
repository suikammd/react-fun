import axios from "axios";
import { useEffect, useState } from "react";
import Display from "./Display";

const SearchCountries = () => {
  const [keyword, setKeyword] = useState("");
  const [display, setDisplay] = useState([]);

  const handleKeywordChange = (event) => {
    console.log(event.target.value);
    setKeyword(event.target.value);
  };

  useEffect(() => {
    if (keyword.length === 0) {
      return;
    }
    let url = "https://restcountries.eu/rest/v2/name/" + keyword;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setDisplay(response.data);
      })
      .catch((error) => {
        setDisplay([]);
      });
  }, [keyword]);

  return (
    <>
      Find countries
      <input value={keyword} onChange={handleKeywordChange}></input>
      <Display display={display} keyword={keyword} />
    </>
  );
};

export default SearchCountries;
