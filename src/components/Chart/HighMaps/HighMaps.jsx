import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartMap from 'highcharts/modules/map'
import React, { useEffect, useState } from 'react'

HighchartMap(Highcharts)

const initOptions = mapData => {
    const fakeData = mapData?.features?.map((feature, index) => ({
        key: feature.properties['hc-key'],
        value: index
    }))
    return {
        chart: {
            heigh: 500,
            style: {
                fontFamily: 'Roboto'
            }
        },
        title: {
            text: null
        },
        mapNavigattion: {
            enabled: true
        },
        colorAxis: {
            min: 0,
            stops: [
                [0.2, "#FFC4AA"],
                [0.4, "#FFA866"],
                [0.6, "#FF392B"],
                [0.8, "#B71525"],
                [1, "#7A0826"],
            ]
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom'
        },
        series: {
            mapData: mapData,
            name: 'Số ca nhiễm',
            data: fakeData,
            joinBy: ['hc-key', 'key']
        }
    }

}
const HighMaps = ({ mapData }) => {
    const [options, setOptions] = useState({})
    useEffect(() => {
        if (mapData) {
            setOptions(initOptions(mapData))
        }
    }, [mapData])
    console.log(mapData)
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                constructorType="mapChart"
            ></HighchartsReact>
        </div>
    )
}

export default HighMaps
