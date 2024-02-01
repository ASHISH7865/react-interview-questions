/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import FolderLayout from "./FolderLayout";
import explorer, { sortItemsAlphabetically } from "../data/explorerData";
import { FolderPlus, FilePlus2, CopyMinus } from "lucide-react";
import ExplorerData from "../types/types";
import { nanoid } from "nanoid";

const MemoizedFolderLayout = React.memo(FolderLayout);

const initializeIsExpanded = (data: ExplorerData) => {
  data.id = nanoid();
  data.isExpanded = false;
  if (data.items) {
    data.items.forEach((item) => initializeIsExpanded(item));
  }
};

export type Add = {
  parentId: string;
  type: string;
  name: string;
  showInput?: boolean;
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [explorerData, setExplorerData] = useState<ExplorerData | null>(null);
  const [parentId, setParentId] = useState<string>("");
  const [add, setAdd] = useState<Add | null>(null);

  const handleClickOnOutsideTheInput = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (target.id !== "add-file-folder" && add?.name === "" && add?.showInput) {
      setAdd(null);
    }
    if (add?.name !== "" && add?.showInput) {
      const updateExplorerData = (data: ExplorerData) => {
        if (data.id === add?.parentId && data.items) {
          const newItem = {
            id: nanoid(),
            name: add.name,
            isFolder: add.type === "folder",
            items: [],
          };
          data.items.push(newItem);
        }
        if (data.items) {
          data.items.forEach((item) => updateExplorerData(item));
        }
      };

      const updatedExplorerData = { ...explorerData! };
      updateExplorerData(updatedExplorerData);
      sortItemsAlphabetically(updatedExplorerData.items);
      setExplorerData(updatedExplorerData);
      setAdd(null);
    }
  };

  const debouncedHandleInputValue = useCallback(
    debounce((value: string) => {
      setAdd((prev) => ({
        name: value,
        parentId: prev ? prev.parentId : "defaultParentId",
        type: prev ? prev.type : "defaultType",
        showInput: prev ? prev.showInput : false,
      }));
    }, 300),
    []
  );

  const handleInputValue = (value: string) => {
    debouncedHandleInputValue(value);
  };

  const handleAddFileFolder = async (type: string) => {
    setAdd({ parentId, type, name: "", showInput: true });
  };

  const handleFolderClick = (id: string) => {
    setParentId(id);
    const updateIsExpanded = (data: ExplorerData) => {
      if (data.id === id) {
        data.isExpanded = !data.isExpanded;
      }
      if (data.items) {
        data.items.forEach((item) => updateIsExpanded(item));
      }
    };
    const updatedExplorerData = { ...explorerData! };
    updateIsExpanded(updatedExplorerData);
    setExplorerData(updatedExplorerData);
  };
  console.log(parentId)
  useEffect(() => {
    const initializedExplorerData = { ...explorer };
    initializedExplorerData.items = sortItemsAlphabetically(initializedExplorerData.items); 
    initializeIsExpanded(initializedExplorerData);
    initializedExplorerData.isExpanded = true;
    setExplorerData(initializedExplorerData);
    setParentId(initializedExplorerData.id);
  }, []);

  return (
    <div style={gridStyle}>
      <div style={sidebarStyle}>
        <div style={{...sidebarHeaderStyle , position:"sticky",top: "0"}}>
          <h5>File Explorer</h5>
          <div style={{ display: "flex", gap: "1rem" }}>
            <FolderPlus size={18} cursor="pointer" onClick={() => handleAddFileFolder("folder")} />
            <FilePlus2 size={18} cursor="pointer" onClick={() => handleAddFileFolder("file")} />
            <CopyMinus
              size={18}
              cursor="pointer"
              onClick={() => {
                const initializedExplorerData = { ...explorer };
                initializeIsExpanded(initializedExplorerData);
                setExplorerData(initializedExplorerData);
              }}
            />
          </div>
        </div>
        <div style={{ marginTop: "1rem" }}>
          {explorerData && (
            <MemoizedFolderLayout
              explorerData={explorerData}
              onFolderClick={handleFolderClick}
              add={add}
              handleClickOnOutsideTheInput={handleClickOnOutsideTheInput}
              handleInputValue={handleInputValue}
            />
          )}
        </div>
      </div>
      <div style={contentStyle} onClick={handleClickOnOutsideTheInput}>
        {children}
      </div>
    </div>
  );
};

export default RootLayout;

const gridStyle = {
  display: "flex",
  width: "100%",
  minHeight: "100vh",
};

const sidebarStyle = {
  minWidth: "300px",
  padding: "1rem",
  backgroundColor: "#00111c",
  color: "#dddddd",
  fontSize: "14px",
  height: "calc(100vh - 2rem)",
  overflow: "auto",
};

const sidebarHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #fff",
  width: "100%",
  backgroundColor: "#00111c",
};

const contentStyle = {
  padding: "1rem",
  flexGrow: 1,
  backgroundColor: "#001523",
  color: "#dddddd",
  height: "calc(100vh - 2rem)",
  overflow: "auto",
};

const debounce = (func: any, delay: number) => {
  let timeoutId: any;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
