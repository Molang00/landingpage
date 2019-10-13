import React from "react";
import explainImg from "./styles/c-logo.png";
import "./styles/Main.css";

function Main(props) {
  return (
    <div class="content" id="feature">
      <div class="content-containter">
        <img src={explainImg} class="content-image" alt="explain" />
        <div class="content-text" id="pc_user">
          <h4>쉽게, 빠르게, 함께</h4>
          <h2>시작하는 통합 개발환경 CherryBox</h2>
          <h3>왜 Cocktail인가요?</h3>
          <p>
            지금까지 존재했던 다양한 코드 편집기들은 너무 어려웠습니다. 코드를
            한 줄이라도 적어보기 위해선 프로젝트를 생성하고, 복잡한 환경변수
            설정이 필요했죠.
          </p>
          <p>그래서 저희 CherryBox가 Cocktail을 개발했습니다!</p>
          <p>
            가장 빠르게 C 코딩을 시작할 수 있는 CockTail은 설치 후 프로그램을
            실행하면 바로 코딩할 수 있습니다.
            <br />
            물론 Cocktail내에서 코드 컴파일 및 실행도 가능하기 때문에 테스트까지
            한번에 진행할 수 있습니다.
          </p>
          <p>
            c언어를 이용해 처음 코딩을 배우시는 분,
            <br />한 파일만으로 알고리즘 문제를 푸시는 분
            <br />한 번 써보시면 편리함헤 빠져버린 자신을 마주하게 되실거에요
          </p>
        </div>
        <div class="content-text" id="mobile_user">
          <h5>쉽게, 빠르게, 함께</h5>
          <h3>
            처음 시작하는
            <br />
            통합 개발환경
            <br />
            CherryBox
          </h3>
          <p>PC에서 만나보세요!</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
