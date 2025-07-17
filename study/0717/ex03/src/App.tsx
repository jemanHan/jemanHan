import React from 'react';
import './App.css';

import { UserProvider } from './contexts/UserContext';
import ThemeProvider from './contexts/ThemeContext';
import LanguageProvider from './contexts/LanguageContext';

import { Header } from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <UserProvider>
          <div className="App">
            <Header />
            <Content />
          
          </div>
        </UserProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
