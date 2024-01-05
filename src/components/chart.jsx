import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

function Chart() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [clicked, setClicked] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/');
    };

    const handleClickPie = (e) => {
        e.preventDefault();
        setClicked(!clicked)
    }


    const sampleData = 'https://www.ag-grid.com/example-assets/space-mission-data.json';

    useEffect(() => {
        fetch(sampleData)
            .then(response => response.json())
            .then(fetchedData => setData(fetchedData))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const successfulMissions = data.filter(mission => mission.successful);

    // group the data to show percentage
    var x = 0;
    const groupedData = data.reduce((accumulator, currentValue) => {
        if (!accumulator[currentValue.company]) {
            x = 0;
            accumulator[currentValue.company] = 0;
        }
        x = x + 1;
        accumulator[currentValue.company] = x;
        return accumulator;
    }, {});


    // pie chart
    const formattedData = Object.entries(groupedData)
        .map(([name, value]) => ({ name, value }));

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text className="text-sm" x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${name}:${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div className="container mx-auto h-screen items-center justify-center text-center">
            <div className='text-blue-500 text-4xl flex p-4 justify-between'>
                Chart
                <button className="text-sm ml-4 font-medium bg-primary-100 cursor-pointer text-white-100 w-[100px] border-2 border-primary-100" onClick={handleClick}>
                    Back to home
                </button>
            </div>

            <div className="h-[800px] bg-white-100 p-10 border-none w-auto">
            <button
                className="text-sm ml-4 p-2 font-medium bg-primary-100 cursor-pointer text-white-100 w-[100px] border-2 border-primary-100"
                onClick={handleClickPie}
            >
                {clicked ? 'Click here for pie chart' : 'Click here for line chart'}
            </button>
                <ResponsiveContainer width="100%" height="100%" >
                    {clicked ? (
                        <LineChart
                            width={500}
                            height={300}
                            data={successfulMissions}
                            dataKey="date"
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis dataKey="price" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="company" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="price" stroke="#82ca9d" />
                        </LineChart>
                    ) : (
                        <PieChart width={800} height={800}>
                            <Pie
                                data={formattedData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={300}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    )}
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Chart;
