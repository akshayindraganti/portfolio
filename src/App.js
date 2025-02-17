import { Route, Switch, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import LandingPage from "./components/LandingPage";
import MySkillsPage from "./components/MySkillsPage";
import ErrorPage from "./components/ErrorPage";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />

        {/* For framer-motion animation on page change! */}
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/work" component={LandingPage} />
            <Route exact path="/skills" component={MySkillsPage} />
            <Route path="*">{ErrorPage}</Route>
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
