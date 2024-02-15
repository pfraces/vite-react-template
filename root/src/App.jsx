import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';
import { scope } from './App.module.css';

export default function App() {
  return (
    <div className={scope}>
      <RouterProvider router={router} />
    </div>
  );
}
