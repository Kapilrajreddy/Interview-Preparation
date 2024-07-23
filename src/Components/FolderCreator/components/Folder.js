import { useState } from "react";

const Folder = ({
  explorerData,
  handleInsertNode,
  handleDeleteNode,
  handleUpdateNode,
}) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState(explorerData.name);

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    handleDeleteNode(explorerData.id);
  };

  const handleUpdate = (e) => {
    e.stopPropagation();
    handleUpdateNode(explorerData.id, newName);
    setEditMode(false);
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorerData.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorerData.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          {editMode ? (
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onBlur={handleUpdate}
              onKeyDown={(e) => e.keyCode === 13 && handleUpdate(e)}
              autoFocus
            />
          ) : (
            <span>📁 {explorerData.name}</span>
          )}
          <div>
            <button onClick={(e) => handleDelete(e)}>Delete</button>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setEditMode(true);
              }}
            >
              Rename
            </button>
          </div>
        </div>
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "25px" }}
        >
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                onKeyDown={onAddFolder}
                type="text"
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                className="inputContainer__input"
                autoFocus
              />
            </div>
          )}
          {explorerData.items.map((exp) => (
            <Folder
              handleInsertNode={handleInsertNode}
              handleDeleteNode={handleDeleteNode}
              handleUpdateNode={handleUpdateNode}
              explorerData={exp}
              key={exp.id}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="file">
        {editMode ? (
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onBlur={handleUpdate}
            onKeyDown={(e) => e.keyCode === 13 && handleUpdate(e)}
            autoFocus
          />
        ) : (
          <span>📄 {explorerData.name}</span>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(e);
          }}
        >
          Delete
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setEditMode(true);
          }}
        >
          Rename
        </button>
      </div>
    );
  }
};

export default Folder;
