'use client'
import { SimpleGauge } from "react-gauges";
import { useStore } from "@/app/context/context";


export default function CircularProgressBasic({value, classification} : {value: number, classification: boolean}) {
  const {theme} = useStore()
  let color = '#90caf9'
  if(value > 50){
    color = '#fdd835'
  }
  if (classification) {
    color = '#fa4d56'
  }
  return( 
  <div className="w-40">

    <SimpleGauge value={value} isTotal={true} barColor={color} barBaseColor={theme.palette.mode === 'dark' ? '#333333' : '#888888'} labelColor={theme.palette.mode === 'dark' ? '#aaaaaa' : '#555555'} barWidth={10} labelFontWeight="light" indicatorVisible={false} />
  </div>
  )
}