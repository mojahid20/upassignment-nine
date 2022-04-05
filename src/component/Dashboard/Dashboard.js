
import { Line, LineChart, Tooltip } from 'recharts';
import React from 'react';
import { PieChart,Pie} from 'recharts';
import './Dashboard.css';
import { BarChart,XAxis,YAxis,Legend,CartesianGrid,Bar} from 'recharts';
import {
    ScatterChart,
    Scatter,
    
    
    ZAxis,
   
  
    
    
  } from 'recharts';
  





const Dashboard = () => {
 
    const data = [
        { name: 'facebook', value: 20000000 },
        { name: 'telegarm', value: 5000000  },
        { name: 'tiwter', value: 10000000 },
        { name: 'instagram', value: 15000000 },
      ];
   const data02 = [
    { name: 'facebook', value: 20000000 },
    { name: 'telegarm', value: 50000000 },
    { name: 'tiwter', value: 10000000 },
    { name: 'instagram', value: 150000000 },
    
  ];

  const data01=
  [
    {
        "page": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "page": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "page": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "page": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "page": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "page": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
];
const data03 = [
    { x: 200, y: 260, z: 240 },
    { x: 240, y: 290, z: 220 },
    { x: 190, y: 290, z: 250 },
    { x: 198, y: 250, z: 210 },
    { x: 180, y: 280, z: 260 },
    { x: 210, y: 220, z: 230 },
  ];
    return (
      <div className='text-center mt-5'>
       <h4 className='mb-0'>Socail Media Users</h4>
        
        <div className='flex'>
            
            <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          <Pie dataKey={'name'} />
          <Tooltip />
        </PieChart>
        <BarChart
          width={400}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
        
       
        </div>

        <div>
            <h3>ThreeDimScatterChart</h3>
            <div className='grid'>
             <LineChart width={400} height={300} data={data01}>
                 <Line dataKey={'sell'}></Line>
                 <Line dataKey={'investment'}></Line>
                 <XAxis dataKey={'page'} />
                 <YAxis dataKey={'sell'} />
                 <Tooltip />
             </LineChart>
             <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <ZAxis type="number" dataKey="z" range={[60, 400]} name="score" unit="km" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="A school" data={data03} fill="#8884d8" shape="star" />
          
        </ScatterChart>
            </div>
        </div>
        </div>

        
    );
};

export default Dashboard;