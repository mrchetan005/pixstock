
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './context/themeContext/index.jsx';
import ActivePageProvider from './context/activePageContext/index.jsx';
import DownloadListProvider from './context/downloadListContext/index.jsx';
import ObserverContextProvider from './context/observerContext/index.jsx';
import ResizeContextProvider from './context/resizeContext/index.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ResizeContextProvider>
    <ObserverContextProvider>
      <DownloadListProvider>
        <ActivePageProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ActivePageProvider>
      </DownloadListProvider>
    </ObserverContextProvider>
  </ResizeContextProvider>
  // </React.StrictMode>,
)
