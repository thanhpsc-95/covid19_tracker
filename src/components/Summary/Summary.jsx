import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import HighMaps from '../Chart/HighMaps/HighMaps';
import LineChart from '../Chart/LineChart/LineChart';

const Summary = ({ report, country }) => {
    const [mapData, setMapData] = useState([])
    useEffect(() => {
        if (country) {
            import(`@highcharts/map-collection/countries/${country}/${country}-all.geo.json`).then(
                res => setMapData(res)
            )
        }
    }, [country])
    return (
        report && <Grid container spacing={3}>
            <Grid item sm={8} xs={12}>
                <LineChart data={report} />
            </Grid>
            <Grid item sm={4} xs={12}>
                <HighMaps mapData={mapData}></HighMaps>
            </Grid>
        </Grid>
    )
}

export default Summary;
