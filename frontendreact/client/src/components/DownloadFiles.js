
import React, { useRef, useState } from "react";
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import {Button, Table} from '@material-ui/core';




export default function useFile () {
  const [file, setFile] = useState('');
  const [data, getFile] = useState({ name: "", path: "" });    
  const [progress, setProgess] = useState(0);
  const el = useRef(); // accesing input element

 

  const handleChange = e => {
    setProgess(0)
    setFile(e.target.files[0]);
  
  };
 
  const uploadFile = async e => {
    e.preventDefault();
    console.log(file);

    const formData = new FormData();
    formData.append("file", file);
  

     axios.post('http://localhost:8080/upload', formData, {
       onUploadProgress: (ProgressEvent) => {
        let progress = Math.round(
        ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
        setProgess(progress);
      }
    })

        .then(res => { // then print response status
          console.log(res);
          getFile({ name: res.data.name,
            path: 'http://localhost:8080' + res.data.path
          })
}).catch(err => console.log(err))}
        

  return (
  
    <div>
    <div className="file-upload">
      <h2>Download your application!</h2>
        <input type="file" ref={el} onChange={handleChange} />                
        <div className="progessBar" style={{ width: progress }}>
           {progress}
        </div>
        <Button onClick={uploadFile} className="upbutton">                   
        Upload
        </Button>
    <hr />
    {/* displaying received image*/}
    {data.path && <img src={data.path} alt={data.name} />}
    </div>
</div>

);
}



