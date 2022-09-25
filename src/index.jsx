
import React from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import moviesApp from "./reducers/reducers";
import { devToolsEnhancer } from "redux-devtools-extension";

import  MainView  from "./components/main-view/main-view";

//Import statement to indicate tha we need to bundel ./index.scss;
import "./index.scss";

const store = createStore(moviesApp, devToolsEnhancer());

//Main component (will eventually use all others)
class MakaiFlixApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <MainView />
        </Container>
      </Provider>
    );
  }
}

//Find the Root of our app
const container = document.getElementsByClassName("app-container")[0];

// Tell React to render our app in the root DOM element
ReactDOM.render(React.createElement(MakaiFlixApplication),container);


/*import React  from "react";
import ReactDOM  from "react-dom";
import Container from "react-bootstrap/Container";
import { createStore } from 'redux';


import { MainView } from "./components/main-view/main-view";
// import statement to indicate thst you need to bundel ìndex.scss`
import'./index.scss';

// Main component (will eventually use all others)
class MakaiFlixApplication extends React.Component {
    render() {
        return (
           <Container fluid style={{paddingTop: '0.75rem'}}>
             <MainView />
           </Container>
        );
    }
} 

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells react to render your app in the root DOM element
ReactDOM.render(React.createElement(MakaiFlixApplication),container);*/