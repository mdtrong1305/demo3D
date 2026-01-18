
import './App.css'
import { routes } from './routes';
import { useRoutes } from 'react-router-dom';
import { Toaster } from "sonner";

function App() {
  const routerElements = useRoutes(routes);

  return (
    <>
      {/* router  */}
      {routerElements} 
      {/* đặt toaster thông báo ở toàn cục */}
      <Toaster richColors position="top-right" /> 
    </>
  )
}

export default App
