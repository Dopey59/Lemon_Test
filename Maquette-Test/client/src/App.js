//Fichiers CSS
import './App.css';
import './index.css';

//Routes react-router
import { Route, Routes } from 'react-router-dom';

// Importer les pages du sites
import Homepage from './Pages/Homepage';

//Importer les composants pour le site


function App() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
    </Routes>
  );
}
export default App;