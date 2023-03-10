import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { CustomFilterPropType,FilterValuesProps } from "./CustomFilter.type";

function CustomFilter({getAllFilterValues,clearFilters}:CustomFilterPropType) {
  const [brand, setBrand] = useState("");
  const [ram, setRam] = useState("");
  const [screenSize, setScreenSize] = useState("");
  const [rating, setRating] = useState("");
  return (
    <div>
      <Container maxWidth="sm" sx={{ float: "left" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Filter</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <form>
              <FormControl sx={{ width: "40%", margin: 2 }}>
                <InputLabel id="demo-simple-select-label">
                  Manufacturer
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={brand}
                  label="Brand"
                  onChange={(event) => setBrand(event.target.value)}
                >
                  <MenuItem value="Samsung">Samsung</MenuItem>
                  <MenuItem value="Google">Google</MenuItem>
                  <MenuItem value="Apple">Apple</MenuItem>
                  <MenuItem value="ASUS">ASUS</MenuItem>
                  <MenuItem value="OnePlus">OnePlus</MenuItem>
                  <MenuItem value="Xiaomi">Xiaomi</MenuItem>
                  <MenuItem value="Realme">Realme</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: "40%", margin: 2 }}>
                <InputLabel id="demo-simple-select-label">
                  Ram Size (GB)
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={ram}
                  label="Brand"
                  onChange={(event) => setRam(event.target.value)}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="6">6</MenuItem>
                  <MenuItem value="8">8</MenuItem>
                  <MenuItem value="12">12</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: "40%", margin: 2 }}>
                <InputLabel id="demo-simple-select-label">
                  Screen Size
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={screenSize}
                  label="Brand"
                  onChange={(event) => setScreenSize(event.target.value)}
                >
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="6">6</MenuItem>
                  <MenuItem value="7">7</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: "40%", margin: 2 }}>
                <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={rating}
                  label="Brand"
                  onChange={(event) => setRating(event.target.value)}
                >
                  <MenuItem value="1">1 <Rating name="read-only" value={1} readOnly /></MenuItem>
                  <MenuItem value="2">2 <Rating name="read-only" value={2} readOnly /></MenuItem>
                  <MenuItem value="3">3 <Rating name="read-only" value={3} readOnly /></MenuItem>
                  <MenuItem value="4">4 <Rating name="read-only" value={4} readOnly /></MenuItem>
                  <MenuItem value="5">5 <Rating name="read-only" value={5} readOnly /></MenuItem>
                </Select>
              </FormControl>
              <Button variant="outlined" color="success" sx={{ margin: 2 }} onClick={
                ()=>{
                    getAllFilterValues({brand,ram,screenSize,rating}as unknown as FilterValuesProps);
                }
              }>
                Apply Filter
              </Button>
              <Button
                variant="outlined"
                color="error"
                sx={{ margin: 2 }}
                onClick={() => {
                  setBrand("");
                  setRam("");
                  setRating("");
                  setScreenSize("");
                  clearFilters()
                }}
              >
                Clear
              </Button>
            </form>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}


export default CustomFilter;