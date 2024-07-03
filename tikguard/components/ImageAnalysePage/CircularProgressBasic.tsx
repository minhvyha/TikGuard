'use client'
import { SimpleGauge } from "react-gauges";



export default function CircularProgressBasic({value} : {value: number}) {
  let color = 'red'

  return( 
  <div className="">

    <SimpleGauge value={value} isTotal={true} barColor="red" barWidth={10} labelFontWeight="light" indicatorVisible={false} />
  </div>
  )
}