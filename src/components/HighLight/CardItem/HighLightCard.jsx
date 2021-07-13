import { makeStyles, Typography } from '@material-ui/core'
import { Card, CardContent } from '@material-ui/core'
import moment from 'moment'
import React from 'react'
import CountUp from 'react-countup';

const useStyles = makeStyles(() => ({
    cardWrapper: (props) => {
        if (props.type === 'confirmed') return { borderLeft: '0.5rem solid rgba(0,0,255,0.8)' }
        if (props.type === 'active') return { borderLeft: '0.5rem solid rgba(0,0,255,0.5)' }
        if (props.type === 'recovered') return { borderLeft: '0.5rem solid rgba(0,255,0,0.8)' }
        else return { borderLeft: '0.5rem solid rgba(255,0,0,0.8)' }
    }
}))

const HighLightCard = ({ title, count, updatedDate, type }) => {
    const styles = useStyles({ type });
    return (
        <Card className={styles.cardWrapper} style={{ marginTop: '0.5rem' }}>
            <CardContent>
                <Typography component="p" variant="h6">{title}</Typography>
                <Typography component="p" variant="h4">
                    <CountUp end={count} delay={1000} separator="." decimal=","></CountUp>
                </Typography>
                <Typography component="p" variant="caption">Ngày cập nhật: {updatedDate && moment(new Date(updatedDate)).format("DD/MM/YYYY hh:mm")}</Typography>
            </CardContent>
        </Card>
    )
}

export default HighLightCard
