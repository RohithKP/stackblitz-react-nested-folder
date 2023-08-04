import * as React from 'react';
import './style.css';

export default function File({ data, onFileClick, level }) {
  return (
    <>
      {data.children ? (
        <div style={{ paddingLeft: `${level * 10}px` }}>
          <div onClick={() => onFileClick(data)}>{data.name}</div>
          {data.opened &&
            data.children.map((item) => (
              <File data={item} onFileClick={onFileClick} level={level + 1} />
            ))}
        </div>
      ) : (
        <div>{data.name}</div>
      )}
    </>
  );
}
