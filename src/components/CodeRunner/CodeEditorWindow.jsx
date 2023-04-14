
import React, {  useState } from "react";
import axios from 'axios'
import { Terminal } from 'xterm';
import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState( "");
  const [loading, setLoading] = useState(false);
  const handleEditorChange = (value) => {
    setValue(value);
  };
  const [data, setData] = useState()
  console.log(data)
  const handleCompile = async()=>{
    try{
      setLoading(true)
      const {data} = await axios.post('http://localhost:4500/api/compiler/compile',{
        script: value,
        language: "nodejs",
      },{
        headers: {
          'Content-Type': 'application/json'
        },
      })
      setData(data.output)
      setLoading(false)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <div className="flex flex-col">
      <div className="w-[100%] h-[50px] flex justify-center p-2">
    <button className="bg-[#6a6aec] text-[white] w-[100px]" onClick={(handleCompile)}>Run</button>
      </div>
      <Editor
      className="border-[1px] border-[black]"
      height="50vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        // theme={}
        defaultValue="// Enter your code here..."
        onChange={handleEditorChange}
      />
    </div>
    <div className="p-3 w-[100%] h-[40vh] border-[1px] border-[black] overflow-scroll">
    {
      loading ? "Loading" :
      <pre>
      <span className="text-[red]" dangerouslySetInnerHTML={{__html:data ?  data : "Write code and run" }}></span>
      </pre>
    }
  </div>
    </>
  );
}; 
export default CodeEditorWindow;