import React from 'react'
import { FormControl, Grid, InputLabel, NativeSelect } from '@material-ui/core'

const CountrySelector = ({ countries = [], value = "", handleOnChange }) => {
    return (
        <Grid item xs={12} sm={6} md={3} lg={4}>
            <FormControl fullWidth>
                <InputLabel htmlFor="country-selector" shrink>Quốc gia</InputLabel>
                <NativeSelect
                    value={value}
                    onChange={handleOnChange}
                    inputProps={{
                        name: "country",
                        id: "country-selector"
                    }}
                >
                    {countries.map(country => (
                        <option key={country.ISO2} value={country.ISO2}>{country.Country}</option>
                    ))}
                </NativeSelect>
            </FormControl >
        </Grid>
    )
}

export default CountrySelector;
