import * as React from 'react';
import File from './File';
import './style.css';

export default function App() {
  const [files, setFiles] = React.useState([
    {
      name: 'index',
      opened: false,
    },
    {
      name: 'Folder 1',
      opened: false,
      children: [
        {
          name: 'Folder 2',
          children: [
            {
              name: 'inner file',
            },
          ],
        },
      ],
    },
  ]);

  const onFileClick = (data) => {
    if (data.children) {
      data.opened = !data.opened;
    }
    setFiles([...files]);
  };
  return (
    <div>
      {files.map((item) => (
        <File data={item} onFileClick={onFileClick} level={1} />
      ))}
    </div>
  );
}
