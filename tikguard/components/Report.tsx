import React, { useEffect, useState } from 'react';
import ModalCard from '@/components/ModalCard';
import { useStore } from '@/app/context/context';
import { defaultValue } from '@/constant';

const Report = ({ page }: { page: string }) => {
  const { data } = useStore();
  const [modalCards, setModalCards] = useState([] as any[]);
  const [remainingCards, setRemainingCards] = useState([] as any[]);
  useEffect(() => {
    let remaining = defaultValue[page as keyof typeof defaultValue];
    if (data !== null) {
      const cards = data.map((info: any, index: number) => {
        remaining = remaining.filter((x) => x !== info.label);

        return <ModalCard key={index} data={info} />;
      });
      if (remaining.length > 0) {
        const remainingCards = remaining.map((label: string, index: number) => {
          return (
            <ModalCard
              key={index}
              data={{
                namespace: null,
                id: null,
                label: label,
                hierarchy: null,
                score: null,
                frequency: null,
                winner: null,
                positions: null,
              }}
            />
          );
        });
        setRemainingCards([...remainingCards]);
      }
      setModalCards(cards);
    }
  }, [data]);
  useEffect(() => { 
    let remaining = defaultValue[page as keyof typeof defaultValue];

    const remainingCards = remaining.map((label: string, index: number) => {
        return (
          <ModalCard
            key={index}
            data={{
              namespace: null,
              id: null,
              label: label,
              hierarchy: null,
              score: null,
              frequency: null,
              winner: null,
              positions: null,
            }}
          />
        );
      });
      setRemainingCards([...remainingCards]);
      console.log(remainingCards)
    }, []);
  return (
    <div className=" h-full rounded-[3px] dark:text-white text-black dark:bg-black bg-white">
      {modalCards}
      {remainingCards}
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
