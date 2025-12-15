import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import CreatePage from './pages/CreatePage'; // <--- 1. Verifica que esta importación exista

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<DetailPage />} />

        {/* 2. Verifica que esta línea exista dentro de Routes */}
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Layout>
  );
}

export default App;