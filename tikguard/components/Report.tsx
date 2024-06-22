import React from 'react'
import ModalCard from '@/components/ModalCard';
import { useStore } from '@/app/context/context';

const Report = () => {

    const { theme } = useStore();
    const ReportStyles = {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderBottom: `2px solid ${theme.palette.divider}`,
    };

  return (
    <div className='bg-background-800 h-full rounded-[3px]' style={ReportStyles}>

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
