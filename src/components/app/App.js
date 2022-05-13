import { useState } from 'react';

import CaseAddForm from '../caseAddForm/CaseAddForm';
import CaseList from '../caseList/CaseList';
import FilterCases from '../filterCases/FilterCases';

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

    const [cases, setCases] = useState([]);
    const [filter, setFilter] = useState('all');
    // console.log(filter);


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


    const onSelectFilter = (option) => {
        setFilter(filter => option);
    }

    const filteredCases = (cases, filter) => {
        switch (filter) {
            case 'done':
                return cases.filter(item => item.status === true);
            case 'not done':
                return cases.filter(item => item.status === false);
            default:
                return cases;
        }
    }


    return (
        <div className="app">

            <div className="block">
                <CaseAddForm addCase={addCase}/>
            </div>

            <div className="block">
                <FilterCases onSelectFilter={onSelectFilter}/>
            </div>

            <div className="block">
                <CaseList 
                    cases={filteredCases(cases, filter)} 
                    onDelete={onDelete}
                    onToggleStatus={onToggleStatus}
                />
            </div>

        </div>
    );
}

export default App;
