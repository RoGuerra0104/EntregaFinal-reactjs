import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import MainRouter from './routes/MainRouter';
import MainLayuot from './layout/MainLayuot';
import { CardProvider } from './context/CartContext';
function App() {


  return (
    <CardProvider>
      <MainLayuot>
        <MainRouter />
      </MainLayuot>
    </CardProvider>
  )

}

export default App
