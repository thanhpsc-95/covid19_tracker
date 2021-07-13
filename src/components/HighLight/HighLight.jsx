import React from 'react'
import Grid from '@material-ui/core/Grid'
import HighLightCard from './CardItem/HighLightCard';

const HighLight = ({ report }) => {
    const summary = [
        {
            title: "Tổng ca mắc",
            count: report?.Confirmed || 0,
            type: "confirmed",
            updatedDate: report?.Date
        },
        {
            title: "Đang điều trị",
            count: report?.Active || 0,
            type: "active",
            updatedDate: report?.Date
        },
        {
            title: "Hồi phục",
            count: report?.Recovered || 0,
            type: "recovered",
            updatedDate: report?.Date
        },
        {
            title: "Tử vong",
            count: report?.Deaths || 0,
            type: "death",
            updatedDate: report?.Date
        },

    ]
    return (
        <Grid container spacing={3}>
            {summary.map((highLight) => (
                <Grid item xs={12} sm={6} md={3} lg={4} key={highLight.type}>
                    <HighLightCard title={highLight.title} count={highLight.count} type={highLight.type} updatedDate={highLight.updatedDate} />
                </Grid>
            ))}
        </Grid>
    )
}

export default HighLight;
