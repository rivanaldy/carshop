import React from "react";
import Navbar from "./components/navbar";
import Product from "./components/Product";
import { Box, Input, Select, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
function Home() {
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    async function fetchProductData() {
      // Menggunakan Supabase untuk mengambil data produk 
      const { data, error } = await supabase.from("product").select("*");

      if (error) {
        console.error("Error fetching product data:", error);
      } else {
        console.log(data);
        setProductData(data);
      }
    }

    fetchProductData();
  }, []);

  return (
    <>
      <Navbar />
      <Box
        width={"auto"}
        gap={"10px"}
        height={"70px"}
        border={"2px solid whitesmoke"}
        marginTop={"10px"}
        display={"flex"}
        flex={"start"}
        alignItems={"center"}
      >
        <Input placeholder="input product" htmlSize={15} width="auto" />
        <Select placeholder="Select category" width={"300px"}>
          <option value="option1">SEDAN</option>
          <option value="option2">SUV</option>
          <option value="option3">TRUCK</option>
        </Select>
        <Button colorScheme="teal">Search</Button>
      </Box>
      <div className="flex flex-wrap gap-5 w-full mt-5 justify-center items-center">
        {productData?.map((e, i) => (
          <Product key={i} productData={e} />
        ))}
      </div>
    </>
  );
}

export default Home;
