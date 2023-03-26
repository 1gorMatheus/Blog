import { ThemeProvider } from 'styled-components';

import PostsList from './Componentes/PostsList/PostList'
import Dark from './styles/themes/dark'

function App() {

  return (
    <ThemeProvider theme={Dark}>
      <PostsList/>
    </ThemeProvider >
  );
}

export default App;
