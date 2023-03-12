import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { CustomFilterPropType, FilterValuesProps } from "./CustomFilter.type";
import Alert from "@mui/material/Alert";

function CustomFilter({
  getAllFilterValues,
  clearFilters,
  filteredProducts,
}: CustomFilterPropType) {
  const [brand, setBrand] = useState("");
  const [ram, setRam] = useState("");
  const [screenSize, setScreenSize] = useState("");
  const [rating, setRating] = useState("");
  return (
    <div>
      <Container maxWidth="sm" sx={{ float: "left" }}>
        <Accordion data-testid="filter-accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Filter</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <FormControl sx={{ width: "40%", margin: 2 }} >
                <InputLabel id="demo-simple-select-label">
                  Manufacturer
                </InputLabel>
                <Select
                  name="Manufacturer"
                  labelId="demo-simple-select-label"
                  data-testid="Manufacturer"
                  value={brand}
                  label="Brand"
                  onChange={(event) => setBrand(event.target.value)}
                >
                  <MenuItem key={1} data-testid="Samsung" value="Samsung">
                    Samsung
                  </MenuItem>
                  <MenuItem key={2} value="Google">Google</MenuItem>
                  <MenuItem key={3} value="Apple">Apple</MenuItem>
                  <MenuItem key={4} value="ASUS">ASUS</MenuItem>
                  <MenuItem key={5} value="OnePlus">OnePlus</MenuItem>
                  <MenuItem key={6} value="Xiaomi">Xiaomi</MenuItem>
                  <MenuItem key={7} value="Realme">Realme</MenuItem>
                </Select> 
              </FormControl>
              <FormControl sx={{ width: "40%", margin: 2 }}>
                <InputLabel id="demo-simple-select-label">
                  Ram Size (GB)
                </InputLabel>
                <Select
                data-testid='ram'
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                   value={ram}
                  label="Brand"
                  onChange={(event) => setRam(event.target. value)}
                >
                  <MenuItem  value="1">1</MenuItem>
                  <MenuItem  value="2">2</MenuItem>
                  <MenuItem  value="3">3</MenuItem>
                  <MenuItem  value="4">4</MenuItem>
                  <MenuItem  value="6">6</MenuItem>
                  <MenuItem  value="8">8</MenuItem>
                  <MenuItem  value="12">12</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: "40%", margin: 2 }}>
                <InputLabel id="demo-simple-select-label">
                  Screen Size
                </InputLabel>
                <Select
                data-testid='screensize'
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                   value={screenSize}
                  label="Brand"
                  onChange={(event) => setScreenSize(event.target. value)}
                >
                  <MenuItem  value="5">5</MenuItem>
                  <MenuItem  value="6">6</MenuItem>
                  <MenuItem  value="7">7</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: "40%", margin: 2 }}>
                <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                <Select
                data-testid='rating'
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                   value={rating}
                  label="Brand"
                  onChange={(event) => setRating(event.target. value)}
                >
                  <MenuItem value="1">
                    1 <Rating name="read-only" value={1} readOnly />
                  </MenuItem>
                  <MenuItem value="2">
                    2 <Rating name="read-only" value={2} readOnly />
                  </MenuItem>
                  <MenuItem value="3">
                    3 <Rating name="read-only" value={3} readOnly />
                  </MenuItem>
                  <MenuItem value="4">
                    4 <Rating name="read-only" value={4} readOnly />
                  </MenuItem>
                  <MenuItem value="5">
                    5 <Rating name="read-only" value={5} readOnly />
                  </MenuItem>
                </Select>
              </FormControl>
              {filteredProducts.length > 0 ? (
                ""
              ) : (
                <Alert severity="error">No item found for current filter</Alert>
              )}
              <Button
                data-testid="apply-filter"
                variant="outlined"
                color="success"
                sx={{ margin: 2 }}
                onClick={() => {
                  getAllFilterValues({
                    brand,
                    ram,
                    screenSize,
                    rating,
                  } as unknown as FilterValuesProps);
                }}
              >
                Apply Filter
              </Button>
              <Button
                data-testid="clear-filter"
                variant="outlined"
                color="error"
                sx={{ margin: 2 }}
                onClick={() => {
                  setBrand("");
                  setRam("");
                  setRating("");
                  setScreenSize("");
                  clearFilters();
                }}
              >
                Clear
              </Button>
         
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}

export default CustomFilter;
