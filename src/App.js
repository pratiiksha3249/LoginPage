import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authform from './Authform';
import Nextpage from './Nextpage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Authform />
    },
    {
      path: '/nextpage',
      element: <Nextpage />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
