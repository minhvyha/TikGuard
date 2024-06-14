
import React from 'react'
import {NLClient} from "@expertai/nlapi";
import {Language} from "@expertai/nlapi";

var nlClient = new NLClient();

var text = "why are you so dumb, you can't even reach the top shelf.";




const page = () => {
  // console.log(process.env.EAI_USERNAME)
  // console.log(process.env.EAI_PASSWORD)
  // nlClient.detect(text, {
  //   language: Language.EN,
  //   detector: "hate-speech",
  // }).then((result) => {
  //   console.log(result.data?.categories)
  // })
  return (
    <div>page</div>
  )
}

export default page