import { useState } from "react"
import Folder from "./components/Folder"
import explorer from "./Data/folderdata"
import './styles.css'
import useTraverseTree from "./hooks/use-traverse-tree"

const MainApp=()=>{

    const [explorerData,setExplorerData] = useState(explorer)

    const {insertNode,deleteNode,updateNode} = useTraverseTree()

    const handleInsertNode=(folderId,item,isFolder)=>{
        const finalTree = insertNode(explorerData, folderId, item, isFolder);

        setExplorerData({...finalTree})
    }

    const handleDeleteNode = (nodeId) => {
      const updatedTree = deleteNode(explorerData, nodeId);
      setExplorerData({ ...updatedTree });
    };

     const handleUpdateNode = (nodeId, newName) => {
       const updatedTree = updateNode(explorerData, nodeId, newName);
       setExplorerData({ ...updatedTree });
     };


    return (
      <Folder
        handleDeleteNode={handleDeleteNode}
        handleInsertNode={handleInsertNode}
        handleUpdateNode={handleUpdateNode}
        explorerData={explorerData}
      />
    );
}

export default MainApp