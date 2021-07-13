import axios from "axios"

const baseUrl = 'https://api.covid19api.com'
export const fetchCountries = () => axios.get(`${baseUrl}/countries`)
export const getReportByCountry = (country) => axios.get(`${baseUrl}/dayone/country/${country}`)