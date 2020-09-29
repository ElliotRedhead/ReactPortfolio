import React, { useContext } from "react";
import ReactGA from "react-ga";
import Jumbotron from "../components/Jumbotron";
import ProjectList from "../components/ProjectList";
import DisplayContext from "../contexts/DisplayContext";

const Homepage = () => {
  ReactGA.initialize("UA-173420270-1");
  ReactGA.pageview("/home");

  const context = useContext(DisplayContext);

  return (
    <>
      <Jumbotron />
      {context.projectsVisibility === false ? null : (
        <ProjectList />
      )}
    </>
  );
};

export {Homepage};
