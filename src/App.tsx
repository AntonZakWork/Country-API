

import styles from './App.module.scss';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import {Routes, Route} from "react-router-dom";
import CountryPage from './Components/Content/CountryPage/CountryPage';
import { useAppSelector } from './Hooks/hooks';

const App = () => {
    const {theme} = useAppSelector(state => state.country)
    localStorage.setItem('theme', theme)
  return (
    <div data-testid = 'app' className={theme === 'dark' ? styles.app : styles.app + ' light'} >
        <Header/>
        <Routes>
            <Route path = '/' element = {<Content/>}/>
            <Route path = '/:country' element = {<CountryPage/>}/>
        
        </Routes>
    </div>
  );
}

export default App;
