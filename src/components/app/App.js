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

    const onDelete = (id) => {
        setCases(cases => cases.filter(item => item.id !== id));
    }

    const onToggleStatus = (id) => {
        setCases(cases => cases.map(item => {
            if (item.id === id) {
                return {...item, status: !item.status}
            }
            return item;
        }))
    }

    return (
        <div className="app">

            <div className="block">
                <CaseAddForm addCase={addCase}/>
            </div>

            <div className="block">
                <CaseList 
                    cases={cases} 
                    onDelete={onDelete}
                    onToggleStatus={onToggleStatus}
                />
            </div>

        </div>
    );
}

export default App;
