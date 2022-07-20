import {useNavigate} from 'react-router-dom';

const ExpensifyHelp = () => {
    let navigate = useNavigate();
    return (
        <div>
            This is a help page !!
            <button
            onClick={()=> {navigate('/')}}
            >
                Click to navigate
            </button>
        </div>
    )
}

export default ExpensifyHelp