"use client"

import { AppProgress as Progress } from "nextjs-progressbar";

import React from 'react'

const ProgressBar = () => {
  return (
    <div>
      <Progress
        height="50px"
        color="#3B82F6"
        options={{ showSpinner: false }}
      />
    </div>
  );
};

export default ProgressBar;