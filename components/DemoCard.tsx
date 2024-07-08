import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useStore } from '@/app/context/context';

const DemoCard = ({
  title,
  path,
  description,
  url,
  category
}: {
  title: string;
  path: string;
  description: string;
  url: string;
  category: string;
}) => {
  const {setData, setAnalysedText} = useStore();

  function clearData() {
    setData(null);
    setAnalysedText('');
  }
  return (
    <Card sx={{ bgcolor: 'background.default', maxWidth: '400px', padding: '4px' }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <Link href={url} target="_blank" style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {url}
          </Link>
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5, mt:1 }} color="text.secondary">
          {category}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Link onClick={clearData} href={path}>
          <Button size="small">Try Demo</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default DemoCard;
