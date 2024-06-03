import React from 'react';
import useAllProducts from '../../Components/CoustomHooks/useAllProducts';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  BarChart,
} from 'recharts';

const HomeChart = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const [all_products,isPending]=useAllProducts()
    const MenLoafer=all_products?.filter(data=>data.Category==="Men Loafer")
    const MenFlipFlop=all_products?.filter(data=>data.Category=== "Men Flip Flop")
    const MenSlipper=all_products?.filter(data=>data.Category=== "Men Slipper")
    const HighHeel=all_products?.filter(data=>data.Category=== "High Heel")
    const LowHeel=all_products?.filter(data=>data.Category=== "Low Heel")
    const FormalShoes=all_products?.filter(data=>data.Category===  "Men Formal Shoes")
    const MenSneaker=all_products?.filter(data=>data.Category===  "Men Sneaker")
    const SportBoots=all_products?.filter(data=>data.Category==="Sport Boots")
    console.log(MenLoafer)
    const data = [
      {
        name: "Men Loafer",
        uv: MenFlipFlop.length,
        
      },
      {
        name: "Flip Flop",
        uv: MenFlipFlop.length,
       
      },
      {
        name: "Men Slipper",
        uv: MenSlipper.length,
        
      },
      {
        name:"High Heel",
        uv: HighHeel.length,
        
      },
      {
        name: 'Low Hell',
        uv: LowHeel.length,
        
      },
      {
        name: "Formal Shoes",
        uv: FormalShoes.length,
       
      },
      {
        name: "Men Sneaker",
        uv: MenSneaker.length,
        
      },
      {
        name: "Sport Boots",
        uv: SportBoots.length,
        
      }
    ];
    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };
    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;
    
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
        <div>
            <h1 className='text-2xl text-center font-semibold my-4'>Shoes Category Chart</h1>
            <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
        <BarChart
      width={100}
      height={300}
      data={data}
      margin={{
       
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
        </ResponsiveContainer>
      </div>
        </div>
    );
};

export default HomeChart;