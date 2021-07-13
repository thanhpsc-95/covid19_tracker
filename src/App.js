import React, { useEffect, useState } from 'react'
import { fetchCountries, getReportByCountry } from './api'
import { CountrySelector, HighLight, Summary } from './components'
import Container from '@material-ui/core/Container'
import { orderBy } from 'lodash'
import { Typography } from '@material-ui/core'
import '@fontsource/roboto';

const App = () => {

  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState("VN")
  const [report, setReport] = useState([])

  const handleOnChange = (e) => {
    setCountry(e.target.value)
  }

  useEffect(() => {
    fetchCountries()
      .then(res => {
        setCountries(orderBy(res.data, c => c.Country));
      })
  }, [])
  useEffect(() => {
    if (country) {
      getReportByCountry(country)
        .then(res => {
          const { data } = res;
          setReport(data);
        })
    }
  }, [countries, country])
  return (
    <>
      <Container>
        <Typography component="p" variant="h3">Số Liệu Thống Kê COVID-19</Typography>
        <CountrySelector countries={countries} value={country} handleOnChange={handleOnChange} />
        <HighLight report={report[report.length - 1]} />
        <Summary report={report} country={country.toLocaleLowerCase()} />
      </Container>
    </>
  )
}

export default App
