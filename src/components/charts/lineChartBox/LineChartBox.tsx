import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

interface LineChartBox {
    data: object[];
}

const LineChartBox: React.FC<LineChartBox> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Win" stroke="#208D28" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Loss" stroke="#D12030" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LineChartBox
