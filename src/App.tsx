import React, { useState } from "react";
import Layout from "./components/Layout";

function App() {
  // 현재 몇번 사진인지(초기값은 파일명 1.jpeg)
  const [sceneNumber, setSceneNumber] = useState(1);

  return (
    <div className='App'>
      <Layout>
        <img alt='scene' src={`/images/${sceneNumber}.jpeg`} />
      </Layout>
    </div>
  );
}

export default App;
