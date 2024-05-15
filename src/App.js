import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

function App() {
  const { t } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    console.log(language)
  };
  return (
    <div className="App">
      <h1>{t('greeting')}</h1>
      <h1>{t('paragraph')}</h1>
      <h1>{t('greeting')}</h1>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>French</button>
    </div>
  );
}

export default App;
