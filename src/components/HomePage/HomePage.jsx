"use client";

import { useState } from "react";
import FileUpload from "../FileUpload/FileUpload";

const HomePage = () => {
  
  const [transcriptedText, setTranscriptedText] = useState("")

  return (
    <main>

    <div id="title">
      <h1 className="text-xl">Voice Analyzer</h1>
    </div>

      <div id="fileUpload">
        <FileUpload />
      </div>
      <div className="transciption mt-10">
        <label className="text-xl"> Translated Script</label>
        <div className="w-full border grow overflow-auto bg-white text-black ">
          {
            transcriptedText ? 
              transcriptedText : (
                <div className="flex justify-center items-center h-full">
                  No Data
                </div>
              )
          }
        </div>
      </div>
    </main>
    
  )
}

export default HomePage