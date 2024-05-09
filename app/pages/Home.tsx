"use client";
import React, { useState } from "react";
import Band from "./Band";
import { Button, TextField } from "@mui/material";

const Home = () => {
  const [band, setBand] = useState("");
  const [bandStore, setBandStore] = useState<any>([]);

  const handleChange = (e: any) => {
    let currentValue = e.target.value;
    setBand(currentValue)
  };

  const handleSubmit = (band : any) => {
    if(band){
        setBandStore([...bandStore, band])
    }
    setBand('')
  }

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <Band color="yellow" name="yellow" delay={0} />
        <Band color="orange" name="orange" delay={2000} />
        <Band color="blue" name="grey" delay={3000} />
        {
        bandStore.length && bandStore.map((item: any) => (
            <Band key={item} color={item.toString()} name={item.toString()} delay={0} />
        ))}
      </div>
      <div className="flex flex-row justify-center items-center w-1/2 mt-4">
        <TextField
          className="justify-center w-4/5 truncate rounded-md border-2"
          value={band}
          onChange={(e) => handleChange(e)}
        />
        <Button
          className="justify-center w-48 p-4 ml-2 text-base capitalize bg-blue-200 text-blue-800"
          variant="outlined"
          onClick={() => handleSubmit(band)}
        >
          Add Bands
        </Button>
      </div>
    </div>
  );
};

export default Home;
