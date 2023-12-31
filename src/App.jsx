import Login from './components/Login'
import Register from './components/Register'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
import RequireAuth from './components/RequireAuth';
import PersistLogin from './components/PersistLogin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={["ROLE_ADMIN","ROLE_EDITOR"]}/>}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["ROLE_EDITOR","ROLE_ADMIN"]}/>}>
          <Route path="editor" element={<Editor />} />
        </Route>
        
        <Route element={<RequireAuth allowedRoles={["ROLE_ADMIN"]}/>}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["ROLE_ADMIN","ROLE_EDITOR"]}/>}>
          <Route path="lounge" element={<Lounge />} />
        </Route>

        {/*catch all */}
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  )
}

export default App;
