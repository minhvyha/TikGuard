import React from 'react';
import { useStore } from '@/app/context/context';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Language from '@/components/TextAnalysePage/Language';

const SightEngineSwitch = ({ page }: { page: string }) => {
  const { setData, setAnalysedText } = useStore();
  function clearData() {
    setData(null);

    setAnalysedText('');
  }
  return (
    <div className="flex-1 pr-4 flex flex-row gap-3">
      <Link className="flex" onClick={clearData} href="/text/sightengine/ml">
        
        {
          page === 'ml' ? (
            <Button variant="outlined" color='success'>ML Based</Button>
          ) : (
            <Button variant="outlined">ML Based</Button>
          )
        }
      </Link>
      <Link className="flex" onClick={clearData} href="/text/sightengine/rule">
        {page === 'rule' ? (
          <Button variant="outlined" color='success'>Rule Based</Button>
        ) : (
          <Button variant="outlined">Rule Based</Button>
        )}
      </Link>
      <Language />
    </div>
  );
};

export default SightEngineSwitch;
