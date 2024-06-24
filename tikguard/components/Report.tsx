import React, { useEffect } from 'react'
import ModalCard from '@/components/ModalCard';
import { useStore } from '@/app/context/context';

const Report = () => {
    const { data } = useStore();
    let modalCards 
    useEffect(() => {  
        modalCards = data.map((card: { title: string; data: Object; }, index: React.Key | null | undefined) => {
            return <ModalCard key={index} title={card.title} data={card.data} />
        }
    )
        }
    , [data])
  return (
    <div className=' h-full rounded-[3px] dark:text-white text-black dark:bg-black bg-white'>

      <ModalCard title='test 1' data={{
    "data": {
        "content": "fuck you",
        "language": "en",
        "version": "sensei: 4.7.2; disambiguator: 16.0-QNTF-2017",
        "categories": [
            {
                "namespace": "hate-speech_en_1.1",
                "id": "1000",
                "label": "Personal Insult",
                "hierarchy": [
                    "Personal Insult"
                ],
                "score": 120,
                "frequency": 0,
                "winner": true,
                "positions": [
                    {
                        "start": 0,
                        "end": 4
                    },
                    {
                        "start": 5,
                        "end": 8
                    }
                ]
            }
        ],
        "extractions": [
            {
                "namespace": "hate-speech_en_1.1",
                "template": "Hate_speech_detection",
                "fields": [
                    {
                        "name": "cyberbullying",
                        "value": "fuck you",
                        "positions": [
                            {
                                "start": 0,
                                "end": 4
                            }
                        ]
                    },
                    {
                        "name": "target",
                        "value": "individual",
                        "positions": [
                            {
                                "start": 5,
                                "end": 8
                            }
                        ]
                    }
                ]
            }
        ]
    }
}} />
    </div>
  )
}

export default Report;
