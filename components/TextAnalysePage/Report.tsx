import React, { useEffect, useState } from 'react';
import { useStore } from '@/app/context/context';
import { defaultValue } from '@/constant';
import ModalCard from './ModalCard';

const Report = ({ page }: { page: string }) => {
  const { data } = useStore();
  const [modalCards, setModalCards] = useState([] as any[]);
  const [remainingCards, setRemainingCards] = useState([] as any[]);
  useEffect(() => {
    
    let remaining = defaultValue[page as keyof typeof defaultValue];
    if (data !== null) {
      const cards = data.map((info: any, index: number) => {
        console.log(info.label)
        remaining = remaining.filter((x) => x !== info.label);
        console.log(remaining)
        return (
          <ModalCard
            key={index}
            data={{
              label: info.label,
              severity: info.severity,
              positions: info.positions || null,
            }}
          />
        );
      });
      if (remaining.length > 0) {
        console.log('a')
        const remainingCards = remaining.map((label: string, index: number) => {
          return (
            <ModalCard
              key={index}
              data={{
                label: label,
                severity: 0,
                positions: null,
              }}
            />
          );
        });
        setRemainingCards([...remainingCards]);
      }
      else{
        setRemainingCards([])
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
            label: label,
            severity: null,
            positions: null,
          }}
        />
      );
    });
    setRemainingCards([...remainingCards]);
  }, []);
  return (
    <div className=" h-full flex flex-row flex-wrap justify-center gap-4 rounded-[3px] dark:text-white text-black dark:bg-black bg-white">
      {modalCards}
      {remainingCards}
    </div>
  );
};

export default Report;
