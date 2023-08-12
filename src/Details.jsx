// import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Product from "./components/Product";
// import { supabase } from "./supabaseClient";


function Details(props) {
  // console.log(Details)
  // const [productData, setProductData] = useState(null);
  // const { id } = useParams();
  const {state} = useLocation();
  // console.log('state',state)

  // useEffect(() => {
  //   async function fetchProductData() {
  //     // Menggunakan Supabase untuk mengambil data produk berdasarkan ID
  //     const { data, error } = await supabase.from("product").select("*").eq('id', state)
  //     .single();

  //     if (error) {
  //       console.error("Error fetching product data:", error);
  //     } else {
  //       console.log(data);
  //       setProductData(data);
  //     }
  //   }

  //   fetchProductData();
  // }, []);
  // https://ednlotlckjsmnnjycsmx.supabase.co/storage/v1/object/sign/car/products/Toyota-Camry.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYXIvcHJvZHVjdHMvVG95b3RhLUNhbXJ5LmpwZyIsImlhdCI6MTY5MTczOTE2MSwiZXhwIjoxNzIzMjc1MTYxfQ.0NWsmHGd_RkdWKms8tymahjbSjfQjc8AwN2DeURfxNs&t=2023-08-11T07%3A29%3A53.132Z
  // https://ednlotlckjsmnnjycsmx.supabase.co/storage/v1/object/sign/car/products/honda%20civic.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYXIvcHJvZHVjdHMvaG9uZGEgY2l2aWMuanBnIiwiaWF0IjoxNjkxNzQxMTM5LCJleHAiOjE3MjMyNzcxMzl9.wyDF5nI4xwqKTvxc7580BHnLHHlsl_Xqfn5JmKxDPCA&t=2023-08-11T08%3A02%3A50.985Z
  // console.log("id", props);
  return (
    <div>
      <Product isDetail={true}  productData={state} />
    </div>
  );
}

export default Details;
