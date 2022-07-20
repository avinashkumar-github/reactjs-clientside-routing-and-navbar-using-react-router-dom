import {Routes, Route} from 'react-router-dom';
import ExpensifyCreate from '../components/ExpensifyCreate';
import ExpensifyDashboard from '../components/ExpensifyDashboard';
import ExpensifyEdit from '../components/ExpensifyEdit';
import ExpensifyHelp from '../components/ExpensifyHelp';
import PageNotFound from '../components/PageNotFound';


const AppRouter = () =>{
    return (
        <Routes>
            <Route path='/' element={<ExpensifyDashboard />} />
            <Route path='/create' element={<ExpensifyCreate />} />
            <Route path='/edit/:id' element={<ExpensifyEdit />} />
            <Route path='/help' element={<ExpensifyHelp />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRouter;