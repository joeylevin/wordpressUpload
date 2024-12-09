// App.js
import React, { useState } from 'react';
import FileUpload from './FileUpload';
import PostTable from './components/PostTable';
import PostUpload from './components/PostUpload';

function App() {
  const [postsData, setPostsData] = useState([]);

  return (
    <div>
      <h1>Upload Daf Yomi Posts</h1>
      <FileUpload setPostsData={setPostsData} />
      {postsData.length > 0 && (
        <>
          <PostTable postsData={postsData} handleUpload={() => setPostsData(postsData)} />
          <PostUpload postsData={postsData} />
        </>
      )}
    </div>
  );
}

export default App;
