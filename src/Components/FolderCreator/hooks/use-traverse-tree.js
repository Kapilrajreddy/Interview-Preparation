const useTraverseTree=()=>{
    function insertNode(tree,folderId,item,isFolder){
       
        if(tree.id===folderId && tree.isFolder){
            tree.items.unshift({
                id:new Date().getTime(),
                name:item,
                isFolder,
                items:[]
            })

            return tree
        }

        let latestNode = []
        console.log(tree, "before latestNode");

        latestNode = tree.items.map((obj)=>{
            console.log(obj,"obj")
            return insertNode(obj,folderId,item,isFolder)
        })

        console.log(tree,"after latestNode")

        return {...tree,items:latestNode}
    }

    function deleteNode(tree, nodeId) {
      if (tree.id === nodeId) {
        return null;
      }

      if (tree.isFolder) {
        const newItems = tree.items
          .map((item) => deleteNode(item, nodeId))
          .filter((item) => item !== null);

        return { ...tree, items: newItems };
      }

      return tree;
    }

    function updateNode(tree, nodeId, newName) {
      if (tree.id === nodeId) {
        return { ...tree, name: newName };
      }

      if (tree.isFolder) {
        const updatedItems = tree.items.map((item) =>
          updateNode(item, nodeId, newName)
        );

        return { ...tree, items: updatedItems };
      }

      return tree;
    }


    return { insertNode, deleteNode, updateNode };
}
export default useTraverseTree;

