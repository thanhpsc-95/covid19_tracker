import HighchartsReact from 'highcharts-react-official'
import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts'
import moment from 'moment';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const generateOptions = (data) => {
    const categories = data.map(dataItem => moment(new Date(dataItem?.Date)).format("DD/MM/YYYY"));
    return {
        chart: {
            height: 500,
            style: {
                fontFamily: 'Roboto'
            }
        },
        title: {
            text: "Tổng ca nhiễm"
        },
        xAxis: {
            categories: categories,
            crosshair: true
        },
        colors: ['#F3585B'],
        yAxis: {
            min: 0,
            title: {
                text: null
            },
            labels: {
                align: 'right'
            },
        },
        tooltip: {
            headerFormat: `<span style="font-size:10px">{point.key}</span><table>`,
            pointFormat: `<tr><td style="color:{series.color};padding:0">{series.name}:</td>` +
                `<td style="padding:0"><b>{point.y} ca</b></td></tr>`,
            footerFormat: `</table>`
        },
        plotOptions: {
            columns: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: {
            name: "Tổng ca nhiễm",
            data: data?.map(item => item?.Confirmed)
        }
    }
}
const LineChart = ({ data }) => {
    const [options, setOptions] = useState({})
    const [reportType, setReportType] = useState("all")
    useEffect(() => {
        if (data) {
            let customData = [];
            switch (reportType) {
                case "all":
                    customData = data;
                    break;
                case "30days":
                    customData = data.slice(data.length - 30)
                    break;
                case "7days":
                    customData = data.slice(data.length - 7)
                    break;
                default:
                    break;
            }
            setOptions(generateOptions(customData))
        }
    }, [data, reportType])
    return (
        <div>
            <ButtonGroup size="small" aria-label="" style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <Button color={reportType === "all" ? "secondary" : ""} onClick={() => setReportType('all')}>Tất cả</Button>
                <Button color={reportType === "30days" ? "secondary" : ""} onClick={() => setReportType('30days')}>30 ngày</Button>
                <Button color={reportType === "7days" ? "secondary" : ""} onClick={() => setReportType('7days')}>7 ngày</Button>
            </ButtonGroup>
            <HighchartsReact
                highCharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default LineChart
