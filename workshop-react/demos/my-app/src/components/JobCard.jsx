import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from '@mui/material';

const JobCard = ({ company, position, startDate, wage }) => {
  return (
    <Card sx={{ width: 400, height: 380, borderRadius: 3, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="150"
        image="https://unsplash.it/300/150"
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            m: 0,
          }}
        >
          {company}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1, overflowY: 'auto', fontSize: 20 }}
        >
          {position}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1, overflowY: 'auto', fontSize: 16 }}
        >
          {startDate}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 1, overflowY: 'auto', fontSize: 18 }}
        >
          ${wage}
        </Typography>
      </CardContent>
      <CardActions sx={{ alignItems: 'flex-end' }}>
        <Button variant="contained">Apply</Button>
        <Button variant="outlined">Dismiss</Button>
      </CardActions>
    </Card>
  );
};
export default JobCard;
