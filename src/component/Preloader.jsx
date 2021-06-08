import React from 'react';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Preloader() {
  return (
    <div>
        <Typography component="div" key='1'>
          <Skeleton />
        </Typography>
    </div>
  );
}

