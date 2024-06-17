import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const DemoCard = ({
  title,
  path,
  description,
  url,
}: {
  title: string;
  path: string;
  description: string;
  url: string;
}) => {
  return (
    <Card sx={{ bgcolor: 'background.default' }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <Link href={url} target="_blank">
            {url}
          </Link>
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Link href={path}>
          <Button size="small">Try Demo</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default DemoCard;
