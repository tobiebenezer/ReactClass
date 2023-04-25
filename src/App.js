import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './router';
import {TodoProvider} from './context/TodoContext';

function App() {

    return (
        <TodoProvider>
            <Router />
        </TodoProvider>
    )

}

export default App;