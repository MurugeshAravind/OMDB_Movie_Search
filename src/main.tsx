import { createRoot } from 'react-dom/client';
import App from './App';
import '../index.css'; // Import your global styles, including Tailwind CSS

createRoot(document.getElementById('root')!).render(<App />);
