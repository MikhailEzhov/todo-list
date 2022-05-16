import CaseAddForm from '../caseAddForm/CaseAddForm';
import CaseList from '../caseList/CaseList';
import FilterCases from '../filterCases/FilterCases';

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

    return (
        <div className="app">

            <div className="block">
                <CaseAddForm/>
            </div>

            <div className="block">
                <FilterCases/>
            </div>

            <div className="block">
                <CaseList/>
            </div>

        </div>
    );
}

export default App;
