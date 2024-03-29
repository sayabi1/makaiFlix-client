import React  from "react";
import ReactDOM  from "react-dom";
import PropTypes from 'prop-types';
import Container from "react-bootstrap/Container";

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
ReactDOM.render(React.createElement(MakaiFlixApplication),container);