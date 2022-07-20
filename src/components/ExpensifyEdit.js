import {useParams} from 'react-router-dom';

const ExpensifyEdit = () => {
    let {id} = useParams();
    return (
        <div>
            This is a edit expensify page for UserID {id} !!
        </div>
    )
}

export default ExpensifyEdit;