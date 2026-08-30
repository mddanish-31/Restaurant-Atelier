import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { AppRoutes } from '@/routes';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;