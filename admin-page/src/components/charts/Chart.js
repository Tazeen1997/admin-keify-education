import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis';


const Chart = () => {

const data = [
    {x: 0, y: 10},
    {x: 1, y: 1},
    {x: 2, y: 3},
    {x: 3, y: 6},
    {x: 4, y: 9},
    {x: 5, y: 4},
    {x: 6, y: 2},
    {x: 7, y: 5},
    {x: 8, y: 7},
    {x: 9, y: 0},
    {x: 10, y: 4},
]

    return(
<div style={{ marginTop: "15px" }}>
    
    <XYPlot height={300} width={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} color="red" />
        <LineSeries data={data} color="green" />
        <LineSeries data={data} color="orange" />

    </XYPlot>

</div>
    )
}

export default Chart;