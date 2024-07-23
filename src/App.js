
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

import DragDropList from './Components/DrafDropList';
import ContactForm from './Components/ContactForm';
import CountdownTimer from './Components/CountdownTimer';
import ProgressBar from './Components/ProgressBar';
import VirtualizedList from './Components/VirtualizedList';
import MainApp from './Components/FolderCreator/MainApp';
import GetPhotos from './Components/GetPhotos';
import ParentComponent from './Components/ParentChildDataPass/ParentComponent';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/drag" element={<DragDropList />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/count-down" element={<CountdownTimer />} />
        <Route path="/progress-bar" element={<ProgressBar />} />
        <Route path="/virtualization" element={<VirtualizedList />} />
        <Route path="/folder" element={<MainApp />} />
        <Route path="/get-photos" element={<GetPhotos />} />
        <Route path="/parent-child" element={<ParentComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
