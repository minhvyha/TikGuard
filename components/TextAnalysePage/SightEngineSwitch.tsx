import React from 'react';
import { useStore } from '@/app/context/context';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Language from '@/components/TextAnalysePage/Language';

const SightEngineSwitch = () => {
  const { setData, setAnalysedText } = useStore();
  function clearData() {
    setData(null);

    setAnalysedText('');
  }
  return (
    <div className="flex-1 pr-4 flex flex-row gap-3">
      <Link className="flex" onClick={clearData} href="/text/sightengine/ml">
        <Button variant="outlined">ML Model</Button>
      </Link>
      <Link className="flex" onClick={clearData} href="/text/sightengine/rule">
        <Button variant="outlined" color="success">
          Rule-based Model
        </Button>
      </Link>
      <Language />
    </div>
  );
};

export default SightEngineSwitch;
