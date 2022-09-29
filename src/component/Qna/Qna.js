import React from 'react';

const Qna = () => {
    return (
        <div>
            <h4>How does REACT work?</h4>
            <h5>One of the biggest advantages of using React is that you can infuse HTML
                code with JavaScript.

                Users can create a representation of a DOM node by declaring the Element
                function in React. Also the syntax of the HTML code is similar to XML. That
                said, instead of using the traditional DOM class, React uses className.

                JSX tags have a name, children, and attributes. Numeric values and
                expressions must be written inside curly brackets. The quotation marks in
                JSX attributes represent strings, similarly to JavaScript.</h5><br />
            <h4>What are the differences between State and Props?</h4>
            <h5> The state is a local data storage that is local to the component only and
                cannot be passed to other components. The React useState Hook allows us to
                track state in a function component. State generally refers to data or
                properties that need to be tracking in an application.Props are used to pass
                data from one component to another.Props are arguments passed into React
                components. Props are passed to components via HTML attributes. props stands
                for properties.</h5>
            <h4>Besides data loading what other uses do useEffect has?</h4>
            <h5>Besides data loading these bellow are also use cases known for
                useEffect-<br />
                1. Running on state change: validating input field ,<br />
                2. Running on state change: live filtering ,<br />
                3. Running on state change: trigger animation on new array value,<br />
                4. Running on props change: update paragraph list on fetched API data
                update,<br />
                5. Running on props change: updating fetched API data to get BTC updated
                price.</h5>
        </div>
    );
};

export default Qna;