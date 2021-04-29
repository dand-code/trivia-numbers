import React, { useEffect } from 'react';


function Question(props) {

    return (
        <div>
            <p>{props.question["question"]}</p>
            <ul>
                <li>Answer 1</li>
                <li>Answer 2</li>
                <li>Answer 3</li>
                <li>Answer 4</li>
            </ul>
            <div>
                <button>Confirm</button>
                <button onClick={props.skipQuestion}>Skip</button>
            </div>

        </div>
    );
}

export default Question;