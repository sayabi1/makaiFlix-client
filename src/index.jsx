import React  from "react";
import ReactDOM  from "react-dom";
import { MainView } from "./components/main-view/main-view";
// import statement to indicate thst you need to bundel ìndex.scss`
import'./index.scss';

// Main component (will eventually use all others)
class MyFlixApplication extends React.Component {
    render() {
        return (
           <MainView />
        );
    }
} 

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells react to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication),container);