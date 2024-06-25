import React, { useEffect, useState } from 'react';
import ModalCard from '@/components/ModalCard';
import { useStore } from '@/app/context/context';

const Report = () => {
  const { data } = useStore();
const [modalCards, setModalCards] = useState([] as any[]);
    useEffect(() => {
        if (data) {
        const cards = data.map((card: any) => {
            return <ModalCard data={card} />;
        });
        setModalCards(cards);
        }
    }, [data]);
  return (
    <div className=" h-full rounded-[3px] dark:text-white text-black dark:bg-black bg-white">
      {modalCards}
      {/* <ModalCard data={{
     
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
    
}} /> */}
    </div>
  );
};

export default Report;
