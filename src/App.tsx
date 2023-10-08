import React, { useState } from "react";
import Layout from "./components/Layout";
import sceneData from "./scene.json";
import { styled } from "styled-components";

function App() {
  // 현재 몇번 사진인지(초기값은 파일명 1.jpeg)
  const [sceneNumber, setSceneNumber] = useState(1);

  // i태그의 form속성이 "left"이거나, "right"일 때의 핸들러 함수
  const moveScroll = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // 왼쪽을 클릭한 경우
    if (e.currentTarget.attributes[1].value === "left") {
      window.scrollBy({
        left: -window.innerWidth,
        behavior: "smooth", // 부드러운 스크롤 효과
      });
    }
    // 오른쪽을 클릭한 경우
    else if (e.currentTarget.attributes[1].value === "right") {
      window.scrollBy({
        left: window.innerWidth,
        behavior: "smooth", // 부드러운 스크롤 효과
      });
    }
  };

  // 파일명 번호에서 1을 뺀 index번째의 scene
  const currentScene = sceneData.scene[sceneNumber - 1];

  // 해당 scene이 존재할 때, 해당 scene 위에 표시될 화살표 아이콘 태그들을 생성하는 핸들러 함수
  const renderHitzones = () => {
    if (!currentScene || !currentScene.hitzones) {
      return null;
    } else {
      return currentScene.hitzones.map((ele, index) => {
        // ele.goto는 scene에 따라서 있기도 하고, 없기도 하기 때문에 typescript에서는 다음과 같이 명시해줄 필요가 있음
        if (ele.form === "up" && ele.goto) {
          return (
            <Hitzone
              className='bi bi-arrow-up-circle-fill'
              key={index}
              form={ele.form}
              x={ele.x}
              y={ele.y}
              onClick={() => setSceneNumber(ele.goto)}
            ></Hitzone>
          );
        } else if (ele.form === "left") {
          return (
            <Hitzone
              className='bi bi-arrow-left-circle-fill'
              key={index}
              form={ele.form}
              x={ele.x}
              y={ele.y}
              onClick={(e) => moveScroll(e)}
            ></Hitzone>
          );
        } else {
          return (
            <Hitzone
              className='bi bi-arrow-right-circle-fill'
              key={index}
              form={ele.form}
              x={ele.x}
              y={ele.y}
              onClick={(e) => moveScroll(e)}
            ></Hitzone>
          );
        }
      });
    }
  };

  return (
    <div className='App'>
      <Layout>
        <img alt='scene' src={`/images/${sceneNumber}.jpeg`} />
        {renderHitzones()}
      </Layout>
    </div>
  );
}

export default App;

const Hitzone = styled.i<{ form: string; x: string; y: string }>`
  ${({ form }) =>
    form === "up" ? `position : absolute;` : `position : fixed;`}
  font-size: 70px;
  ${({ x, y }) => `left:${x}; top:${y}`}
`;
