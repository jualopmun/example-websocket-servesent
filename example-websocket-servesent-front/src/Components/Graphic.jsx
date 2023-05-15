import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useGraphic } from '../Hooks/useGraphic';


export function Graphic() {

  const {dataGraphic} = useGraphic();
 
  return(
    <>
      <div className="top_menu">
        <div className="title">Valor del Bitcoin por segundos</div>
      </div>
      <LineChart  width={800} height={400} data={dataGraphic} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </>
  )
}