import { useState } from 'react';
import { QuestionForm } from './Components/QuestionForm';
import { ToggleTheme } from './Components/ToggleTheme';



import { GlobalStyle } from './styles/globalstyle';

function App() {
  const [theme, setTheme] = useState('dark')

  return (

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <ToggleTheme setTheme={setTheme} theme={theme}/>
        <QuestionForm />
        <GlobalStyle theme={theme} />
      </div>
  );
}

export default App;
