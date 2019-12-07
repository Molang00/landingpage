import React, { useState } from "react";
import { render } from "react-dom";
import { IntlProvider } from "react-intl";

import Header from "./Header";
import NavBar from "./NavBar";
import Main from "./Main";
import Footer from "./Footer";
import "./styles/Main.css";

const messages = {
  ko: require("./translations/ko.json"),
  en: require("./translations/en.json")
};

function App() {
  const [locale, setLocale] = useState(navigator.language.split("-")[0]);
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <React.Fragment>
        <NavBar setLocale={setLocale} />
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    </IntlProvider>
  );
}

render(<App />, document.getElementById("root"));
