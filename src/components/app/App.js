import { useState } from 'react';

import CaseAddForm from '../caseAddForm/CaseAddForm';
import CaseList from '../caseList/CaseList';

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

    const [cases, setCases] = useState([]);
    // console.log(cases);


    const addCase = (obj) => {
        const newArr = [...cases, obj];
        setCases(cases => newArr);
    };


    return (
        <div className="app">

            <div className="block">
                <CaseAddForm addCase={addCase}/>
            </div>

            <div className="block">
                <CaseList cases={cases}/>
            </div>

        </div>
    );
}

export default App;
