import React from "react";
import { BrowserRouter as Router} from 'react-router-dom';
import Search from './components/Search'

const App = () => {
    return (
        <Router>
            <div>
                <Search/>
            </div>
        </Router>
    )
}

export default App;
