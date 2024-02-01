import React from 'react';
import ExplorerData from '../types/types';
import { ChevronDown, ChevronUp, Folder, File } from 'lucide-react';
import { Add } from './RootLayout';

interface FolderLayoutProps {
  explorerData: ExplorerData;
  onFolderClick: (id: string) => void;
  add: Add | null;
  handleClickOnOutsideTheInput: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleInputValue: (value: string) => void;
}

const FolderLayout = ({
  explorerData,
  onFolderClick,
  add,
  handleClickOnOutsideTheInput,
  handleInputValue,
}: FolderLayoutProps) => {

  // Return the component based on whether it is a folder or a file
  if (explorerData.isFolder) {
    return (
      <div className="folder" key={explorerData.id} onClick={handleClickOnOutsideTheInput}>
        {/* Folder header */}
        <div
          className="folder-name"
          onClick={()=>  onFolderClick(explorerData.id)}
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            justifyContent: 'space-between',
            padding: '0.3rem 0rem 0.3rem 0rem',
            width: '100%',
          }}
        >
          {/* Folder icon and name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Folder size={18} />
            {explorerData.name}
          </div>
          {/* Chevron icon for folder expansion */}
          {explorerData.items.length > 0 && (
            <>
              {explorerData.isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </>
          )}
        </div>

        {/* Add input for new file/folder if applicable */}
        {add?.parentId === explorerData.id && add.showInput && (
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginLeft: '0.5rem' }}>
            {add?.type === 'folder' ? <Folder size={20} /> : <File size={20} />}
            <input
              id="add-file-folder"
              type="text"
              style={inputStyle}
              onChange={(e) => handleInputValue(e.target.value)}
              onKeyDown={(e: any) => {
                if (e.key === 'Enter') {
                  handleClickOnOutsideTheInput(e);
                }
              }}
              autoFocus={true}
            />
          </div>
        )}

        {/* Render child folders if the parent folder is expanded */}
        <div style={{ marginLeft: '0.5rem', display: explorerData.isExpanded ? 'block' : 'none' }}>
          {explorerData.items.map((child) => (
            <FolderLayout
              key={child.id}
              explorerData={child}
              onFolderClick={onFolderClick}
              add={add}
              handleClickOnOutsideTheInput={handleClickOnOutsideTheInput}
              handleInputValue={handleInputValue}
            />
          ))}
        </div>
      </div>
    );
  } else {
    // Render file component
    return (
      <div
        className="file"
        key={explorerData.id}
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          justifyContent: 'space-between',
          padding: '0.3rem 0',
          width: '100%',
        }}
      >
        {/* File icon and name */}
        <div className="file-name" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <File size={18} />
          {explorerData.name}
        </div>
      </div>
    );
  }
};

export default FolderLayout;

// Styles for the input
const inputStyle = {
  width: '100%',
  padding: '0rem 0.1rem',
  border: '0.5px solid #00406c',
  outline: 'none',
  backgroundColor: '#00111c',
  color: '#fff',
  fontSize: '14px',
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  letterSpacing: 'inherit',
  lineHeight: 'inherit',
  borderRadius: '0.2rem',
};
