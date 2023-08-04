import * as React from 'react';
import './style.css';

import React from 'react';

const File: React.FC = React.memo(({ data, onFileClick, level }) => {
  const { name, children, opened } = data;

  const handleFileClick = () => {
    onFileClick(data);
  };

  return (
    <div className="file" style={{ paddingLeft: `${level * 10}px` }}>
      <div onClick={handleFileClick}>{name}</div>
      {opened &&
        children &&
        children.map((item, index) => (
          <File
            key={index}
            data={item}
            onFileClick={onFileClick}
            level={level + 1}
          />
        ))}
    </div>
  );
});

export default File;
