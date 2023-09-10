import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Photos from './pages/photos';
import Collections from './pages/collections';
import Favorite from './pages/favorite';
import PhotoDetails from './pages/photos/PhotoDetails';
import Videos from './pages/videos';
import VideoDetails from './pages/videos/VideoDetails';
import CollectionDetails from './pages/collections/CollectionDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:searchValue' element={<Home />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/photos/detail/:id' element={<PhotoDetails />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/videos/detail/:id' element={<VideoDetails />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/collections/detail/:id' element={<CollectionDetails />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </Router>
  );
}

export default App;
