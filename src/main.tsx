import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/main.scss';
import AppRoutes from './routes';
import { SearchProvider } from './context/SearchContext';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <SearchProvider>
          <AppRoutes />
        </SearchProvider>
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}