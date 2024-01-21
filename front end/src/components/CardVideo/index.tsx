import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { VideoProps } from "../../types/video";

export default function CardVideo({ id, url, image, description }: VideoProps) {
  const navigate = useNavigate();
  function handlePlayVideo() {
    console.log(url);
    navigate(`/watch/${id}`);
  }
  
  return (
    <button className="card-video" onClick={handlePlayVideo}>
      <Card sx={{ maxWidth: 220, maxHeight: 200, overflow: "hidden" }} key={id}>
        <CardMedia
          component="img"
          alt=""
          height="145"
          image={
            image ||
            "https://images.unsplash.com/photo-1546795708-c962dc089798?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <CardContent>
          <Typography variant="caption" color="text.secondary">
            {description ||
              "Lizards are a widespread Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odio maxime dolore atque officiis perspiciatis, numquam non. Aspernatur exercitationem, dolorem at, incidunt molestiae nesciunt, id ea corporis aperiam accusantium aut?"}
          </Typography>
        </CardContent>
      </Card>
    </button>
  );
}
