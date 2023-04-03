import { Menu, MenuItem } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import Tree from "react-d3-tree";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getAllNodes } from "../../../apiCalls/nodesApis";
import AddNodeDialog from "./AddNodeDialog";
// import "./styles.css";




const containerStyles = {
  width: "100vw",
  height: "100vh"
};

const useCenteredTree = () => {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const containerRef = useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 2, y: height / 2 });
    }
  }, []);
  return [translate, containerRef];
};

export default function Roadmap() {
  const [openSelect, setOpenSelect] = useState(null)
  const [openAddNodeDialog, setOpenAddNodeDialog] = useState(false)
  const renderForeignObjectNode = ({
    nodeDatum,
    toggleNode,
    foreignObjectProps
  }) => {
    return (
      <g>
        {/* <circle  r={15}></circle> */}
        {/* `foreignObject` requires width & height to be explicitly set. */}
        <foreignObject {...foreignObjectProps}>
          <div className=" text-[white] bg-[#e08888] flex flex-col gap-2  mr-[10px] border-none" style={{ }}>
            <h3 style={{ textAlign: "center" }}>{nodeDatum.name}</h3>
              <button className=" bg-[red]" onClick={()=>{
                openSelect < 1 ?
                 setOpenSelect(nodeDatum.id)
                 :
                 setOpenSelect(null)
              }}>
                Add
              </button>
      {
        nodeDatum.id === openSelect &&
        <div className="text-[black] flex flex-col w-[100%] h-[50px] ">
            <button onClick={()=>setOpenAddNodeDialog(true)}>Add Node</button>
            <button>Add Content</button>
          </div>
          }
          </div>
        </foreignObject>
      </g>
    )
  }
  const {allNodes} = useSelector(state=>state.nodes)
  const dispatch = useDispatch()
  const location = useLocation()
  const roadmapId = location.pathname.split('/')[3]
  
  useEffect(()=>{
    getAllNodes(dispatch,roadmapId)
    // console.log(allNodes)
  },[dispatch])

  const data = {children:allNodes,name:'Roadmap'}
  // console.log(data)
  const [translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 200, y: 200 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };
  return (
    <div style={containerStyles} ref={containerRef}>
      <Tree
        data={data}
        translate={translate}
        pathFunc="elbow"
        nodeSize={nodeSize}
        // collapsible={false}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
        }
        orientation="vertical"
      />
<AddNodeDialog nodeId={openSelect} roadmapId={roadmapId} setOpenAddNodeDialog={setOpenAddNodeDialog} openAddNodeDialog={openAddNodeDialog} />
    </div>
  );
}
