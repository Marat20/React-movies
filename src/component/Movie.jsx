import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 330,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const {Title, Year, Type, Poster} = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Poster !== 'N/A' ? Poster : Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {Title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='bottomInfo'>
      <Typography variant="body2" color="textSecondary" component="p">
            {Year}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
            {Type}
      </Typography>
      </CardActions>
    </Card>
  );
}