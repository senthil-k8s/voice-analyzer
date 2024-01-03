import React from 'react'

const FileUpload = () => {

const audioType = [
    "audio/mpeg",
    "audio/mp4",
    "audio/m4a",
    "audio/webm"
]

const handleFileChange = (e) => {
    if(e.target.file){
        let file = e.target.files[0];

        if(audioType.indexOf(file.type) === -1){
            
        }
    }
}
  return (
    <div className="flex flex-col mt-10">
        <label > Upload the Audio File </label>
        <input
          type="file"
          accept="audio/*"
          className="cursor-pointer"
          onChange={handleFileChange}
        />
        <button type="submit" className="border border-2 w-50 mt-5">Upload</button>
    </div>
  )
}

export default FileUpload