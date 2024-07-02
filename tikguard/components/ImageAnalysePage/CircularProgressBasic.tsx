'use client'
import { SimpleGauge } from "react-gauges";



export default function CircularProgressBasic({value} : {value: number}) {
  let color = 'red'

  return( 
  <div className="w-1/2">

    <SimpleGauge value={value} isTotal={true} barWidth={10} labelFontWeight="light" indicatorVisible={false} />
  </div>
  )
}