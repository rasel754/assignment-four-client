

import { PureComponent } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    sales: 4000,
    revenue: 2400,
  },
  {
    name: "Feb",
    sales: 3000,
    revenue: 1398,
  },
  {
    name: "Mar",
    sales: 2000,
    revenue: 9800,
  },
  {
    name: "Apr",
    sales: 2780,
    revenue: 3908,
  },
  {
    name: "May",
    sales: 1890,
    revenue: 4800,
  },
  {
    name: "Jun",
    sales: 2390,
    revenue: 3800,
  },
];

export default class DashboardBarChart extends PureComponent {
  render() {
    return (
      <div className="p-6 rounded-lg" style={{ 
        backgroundColor: '#281E35',
        color: '#ffffff'
      }}>
        <h3 className="text-xl font-semibold mb-4">Monthly Performance</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#ffffff30" 
              vertical={false}
            />
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#ffffff' }}
              axisLine={{ stroke: '#ffffff30' }}
              tickLine={{ stroke: '#ffffff30' }}
            />
            <YAxis 
              tick={{ fill: '#ffffff' }}
              axisLine={{ stroke: '#ffffff30' }}
              tickLine={{ stroke: '#ffffff30' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#281E35',
                borderColor: '#FAAD14',
                borderRadius: '8px',
                color: '#ffffff'
              }}
              itemStyle={{ color: '#ffffff' }}
              labelStyle={{ color: '#FAAD14', fontWeight: 'bold' }}
            />
            <Legend 
              wrapperStyle={{
                paddingTop: '20px',
                color: '#ffffff'
              }}
            />
            <Bar
              dataKey="sales"
              name="Total Sales"
              fill="#FAAD14"
              radius={[4, 4, 0, 0]}
              activeBar={<Rectangle fill="#FFD700" stroke="#FAAD14" />}
            />
            <Bar
              dataKey="revenue"
              name="Revenue"
              fill="#6C5CE7"
              radius={[4, 4, 0, 0]}
              activeBar={<Rectangle fill="#A389F4" stroke="#6C5CE7" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}