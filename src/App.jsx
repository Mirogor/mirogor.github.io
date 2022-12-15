
import ArchitectSearch from './pages/ArchitectSearch';
import { Box, ThemeProvider, Container } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MainPage from './pages/MainPage';
import ArchitectPage from './pages/ArchitectPage';
import { useTranslation } from "react-i18next"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useMemo } from 'react';
import ResponsiveAppBar from './components/AppBar';
const theme = createTheme({
  palette: {
    primary: {
      main: "#37474f"
    },
    secondary: {
      main: "#e0e0e0"
    }
  },
});

function App() {
  const { t, i18n } = useTranslation();
  const ids = useMemo(() => Array.from(Array(t("architects.length", { returnObjects: true })).keys()), []);
  return (


    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<ResponsiveAppBar />} >
            <Route index element={<MainPage />}></Route>
            <Route path="archive" element={<ArchitectSearch />} />
            {ids.map((id) => <Route key={id} path={`archive/${id}`} element={<ArchitectPage index={id} />} />)}
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter >




  )
}

export default App
