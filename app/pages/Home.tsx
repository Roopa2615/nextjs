"use client";
import React, { useState } from "react";
import Band from "./Band";
import { Button, TextField, Typography } from "@mui/material";
import _ from 'lodash';

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
    <div className="flex justify-center items-center w-screen h-screen">
    <div className="flex justify-center items-center w-[50%] mt-4 border-[2px] bg-gradient-to-l p-[2px] from-[#7928ca] to-[#ff0080] rounded-[10px]">
    <div className="justify-center items-center h-full w-full bg-white rounded-[10px] p-[10px]">
    <div className="flex flex-col justify-center items-center w-full">
      <Typography className="text-purple-900 text-[30px]">List of Bands</Typography>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <Band color="yellow" name="yellow" delay={0} />
        <Band color="orange" name="orange" delay={2000} />
        <Band color="grey" name="grey" delay={3000} />
        {
          !_.isEmpty(bandStore) && bandStore.map((item: any) => (
            <Band key={item} color={item.toString()} name={item.toString()} delay={0} />
        ))}
      </div>
      <div className="flex flex-row justify-center items-center w-[100%] mt-4 bg-white rounded-[10px]" >
        <TextField
          className="justify-center w-[40%] truncate rounded-md bg-white"
          value={band}
          onChange={(e) => handleChange(e)}
        />
        <Button
          className="justify-center w-[10%] h-[55px] p-4 ml-2 text-[14px] capitalize bg-purple-200 text-purple-800 border-purple-400 hover:bg-purple-200 hover:border-purple-400 focus:border-purple-400"
          variant="outlined"
          onClick={() => handleSubmit(band)}
        >
          Add Bands
        </Button>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Home;
