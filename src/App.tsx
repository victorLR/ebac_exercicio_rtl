import React from 'react';
import Post from './components/Post'; // Importando o componente Post
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      
      <Post>
        "Aqui está o post onde você pode comentar!"
      </Post>
    </div>
  );
}

export default App;
