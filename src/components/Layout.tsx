import React, { ReactNode } from "react";
import styled from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Container>{children}</Container>
    </div>
  );
}

export default Layout;

const Container = styled.div`
  // position을 relative로 줘야 이 div를 기준으로 position값을 absolute로 가지는 화살표들이 위치하게 된다.
  position: relative;
  // Container컴포넌트 영역을 벗어나는 하위 요소에 대해 표시할 방법
  overflow: scroll;
  // 브라우저를 수직으로 빈틈없이 채우도록
  height: 100vh;
  // 하위 요소의 width에 맞춰서 딱 맞도록
  width: fit-content;
  img {
    height: 100vh;
  }
`;
