import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styles from "../ProductCard/ProductCard.module.css";
import Rating from "@mui/material/Rating";
import { ProductCardProps } from "./ProductCard.type";

export default function ProductCard({
  title,
  price,
  brandName,
  imageUrl,
  rating,
  ram,
  screenSize,
  batteryCapacity,
  processor,
}: ProductCardProps) {
  return (
    <div style={{ margin: "5%" }}>
      <Card sx={{ maxWidth: 345, maxHeight: "100vh" }} elevation={12}>
        <CardMedia
          sx={{
            objectFit: "scale-down",
            borderBottom: 2,
            borderColor: "violet",
          }}
          component="img"
          height="250"
          image={imageUrl}
          alt="Chevrolet"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ul>
              <li>Manufacturer : {brandName} </li>
              <li>RAM Size : {ram} GB </li>
              <li>Screen Size : {screenSize} </li>
              <li>Battery : {batteryCapacity} mAh </li>
              <li>Processor : {processor} mAh </li>
            </ul>
          </Typography>
          <Typography variant="h5" gutterBottom>
            $ {price}
          </Typography>
          <Rating name="read-only" value={rating} readOnly />
          <Typography variant="subtitle2" gutterBottom sx={{ float: "right" }}>
            Rating : {rating}/5
          </Typography>
        </CardContent>
        <CardActions sx={{ bottom: 0 }} className={styles.cardButtons}>
          <Button
            className={styles.buttons}
            variant="contained"
            color="success"
            sx={{ width: "8rem" }}
          >
            Buy Now
          </Button>
          <Button
            className={styles.buttons}
            variant="contained"
            color="warning"
            sx={{ width: "8rem" }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
