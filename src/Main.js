import React from "react";
import { FormattedMessage } from "react-intl";
import explainImg from "./images/cherrybox-logo.png";
import cocktailIcon from "./images/cocktail-icon.png";
import "./styles/Main.css";

function Main(props) {
  return (
    <div className="content" id="feature">
      <div className="content-containter">
        <div id="pc_user">
          <img src={explainImg} className="content-image" alt="explain" />
          <div className="content-text">
            <h4>
              <FormattedMessage
                id="main.pc.header1"
                defaultMessage="쉽게, 빠르게, 함께"
              />
            </h4>
            <h2>
              <FormattedMessage
                id="main.pc.header2"
                defaultMessage="시작하는 통합 개발환경 CherryBox"
              />
            </h2>
            <h3>
              <FormattedMessage
                id="main.pc.header3"
                defaultMessage="왜 Cocktail인가요?"
              />
            </h3>
            <p>
              <FormattedMessage
                id="main.pc.p1"
                defaultMessage="지금까지 존재했던 다양한 코드 편집기들은 처음 코딩을 배우는 분들께 너무 어려웠습니다. 그래서 저희 CherryBox가 Cocktail을 개발했습니다!"
              />
            </p>
            <ul>
              <li>
                <FormattedMessage id="main.pc.ul1" />
              </li>
              <p>
                <FormattedMessage id="main.pc.ul1.p" />
              </p>
              <li>
                <FormattedMessage id="main.pc.ul2" />
              </li>
              <p>
                <FormattedMessage id="main.pc.ul2.p" />
              </p>
              <li>
                <FormattedMessage id="main.pc.ul3" />
              </li>
              <p>
                <FormattedMessage id="main.pc.ul3.p" />
              </p>
            </ul>
            <br />
            <p>
              <FormattedMessage
                id="main.pc.p2"
                defaultMessage="c언어를 이용해 처음 코딩을 배우시는 분,{br}한 파일만으로 알고리즘 문제를 푸시는 분{br}한 번 써보시면 편리함에 빠져버린 자신을 마주하게 되실거에요."
                values={{
                  br: <br />
                }}
              />
            </p>
          </div>
        </div>
        <div id="mobile_user">
          <img
            src={cocktailIcon}
            className="content-image"
            alt="cocktailIcon"
          />
          <div className="content-text">
            <h5>
              <FormattedMessage
                id="main.mobile.header1"
                defaultMessage="쉽게, 빠르게, 함께"
              />
            </h5>
            <h3>
              <FormattedMessage
                id="main.mobile.header2"
                defaultMessage="처음 시작하는{br}통합 개발환경{br}CherryBox"
                values={{
                  br: <br />
                }}
              />
            </h3>
            <p>
              <FormattedMessage
                id="main.mobile.p"
                defaultMessage="PC에서 만나보세요!"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
