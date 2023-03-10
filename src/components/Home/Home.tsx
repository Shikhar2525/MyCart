import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Grid from "@mui/material/Grid";
import styles from "../Home/Home.module.css";
import NavBar from "../NavBar/NavBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { ProductCardProps } from "../ProductCard/ProductCard.type";
import CustomFilter from "../CustomFilter/CustomFilter";
import { FilterValuesProps } from "../CustomFilter/CustomFilter.type";

function Home() {
  const [searchProductTitle, setSearchProductTitle] = useState("");
  const [products, setProducts] = useState([{} as ProductCardProps]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [filterValues, setFilterValues] = useState({} as FilterValuesProps);
  const [newValues, setNewValues] = useState([{} as ProductCardProps]);

  const getProducts = async () => {
    const result = await axios.get(
      `http://localhost:3001/products?_page=${page}`
    );
    setProducts(result.data);
    const allResult = await axios.get(`http://localhost:3001/products`);
    setNumberOfPages(allResult.data.length);
  };

  const filterProducts = () => {
    const filterdProducts = products.filter((product) => {
      if (product.brandName === filterValues.brand) {
        return true;
      } else if (product.rating?.toString() === filterValues.rating) {
        return true;
      } else if (product.screenSize?.toString() === filterValues.screenSize) {
        return true;
      } else if (product.ram?.toString() === filterValues.ram) {
        return true;
      } else {
        return false;
      }
    });

    console.log(filterdProducts);
    return filterdProducts;
  };

  useEffect(() => {
    getProducts();
  }, [page]);

  const searchProduct = () => {
    return products.filter((product) => {
      if (searchProductTitle === "") {
        return product;
      } else if (
        product.title.toLowerCase().includes(searchProductTitle.toLowerCase())
      ) {
        return product;
      }
    });
  };
  const newProducts = () => {
    return filterProducts().length === 0 ? searchProduct() : filterProducts();
  };
  return (
    <div>
      <NavBar searchProductTitle={(value) => setSearchProductTitle(value)} />
      <Breadcrumbs aria-label="breadcrumb" sx={{ margin: 3 }}>
        <Link underline="hover" color="inherit" href="/">
          Electronics
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          SmartPhones
        </Link>
        <Typography color="text.primary">Newly Launched</Typography>
      </Breadcrumbs>
      <Typography variant="h4" color="GrayText" margin={2.5}>
        Products {products.length}/{numberOfPages}
      </Typography>
      <CustomFilter
        getAllFilterValues={(value) => {
          setFilterValues(value);
        }}
        clearFilters={()=>{
            setFilterValues({} as FilterValuesProps)
        }}
      />
      <Grid container sx={{ flexDirection: { xs: "column", md: "row" } }}>
        {searchProduct().length > 0 ? (
          newProducts().map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ProductCard
                price={product.price}
                title={product.title}
                processor={product.processor}
                batteryCapacity={product.batteryCapacity}
                brandName={product.brandName}
                ram={product.ram}
                screenSize={product.screenSize}
                imageUrl={product.imageUrl}
                rating={product.rating as any}
              />
            </Grid>
          ))
        ) : (
          <Alert severity="error" sx={{ marginLeft: 2 }}>
            No records found
          </Alert>
        )}
      </Grid>
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(numberOfPages / 10)}
          size="large"
          onChange={(event, value) => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
            setPage(value);
          }}
          sx={{ margin: "auto", marginTop: 1, marginBottom: 3 }}
        />
      </Stack>
    </div>
  );
}

export default Home;
