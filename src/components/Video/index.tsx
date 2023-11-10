import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Video() {
  return (
    <Card sx={{ maxWidth: 220, maxHeight: 200, overflow: 'hidden' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="145"
        image="https://images.unsplash.com/photo-1546795708-c962dc089798?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <CardContent>
        <Typography variant="caption" color="text.secondary">
          Lizards are a widespread Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odio maxime dolore atque officiis perspiciatis, numquam non. Aspernatur exercitationem, dolorem at, incidunt molestiae nesciunt, id ea corporis aperiam accusantium aut?
        </Typography>
      </CardContent>
    </Card>
  );
}