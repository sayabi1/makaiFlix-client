import React  from "react";
import ReactDOM  from "react-dom";
// import statement to indicate thst you need to bundel ìndex.scss`
import'./index.scss';

// Main component (will eventually use all others)
class MyFlixApplication extends React.Component {
    render() {
        return (
            <div className="my-flix">
                <div>Good morning</div>
                </div>
        );
    }
} 

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells react to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication),container);