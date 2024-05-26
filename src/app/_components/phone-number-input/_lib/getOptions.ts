import countryList from "react-select-country-list";
import { CountryOption } from "../_types";
import countryData from "country-data";

export const getOptions = (): CountryOption[] =>
    countryList()
        .getData()
        .map((country) => ({
            ...country,
            dialCode:
                countryData.countries[country.value].countryCallingCodes[0],
            flag: `https://flagcdn.com/w20/${country.value.toLowerCase()}.png`,
        }));
