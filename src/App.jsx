import { Trans, useTranslation } from 'react-i18next'
import './App.css'
import LanguageSelector from './components/language-detector';

function App() {

  const { t } = useTranslation();

  const { line1, line2 } = t("description");
  // ,
  // {
  //   channel: "Abdul Nasir Qureshi"
  // }
  // );

  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greeting")}</h1>

      <span>
        <Trans
          // i18Key={"description.line1"}
          i18nKey={line1}
          values={{
            channel: "Abdul Nasir Qureshi",
          }}
          components={{ 1: <b /> }}
        />
      </span>

      {/* <p>{line1}</p> */}
      <p>{line2}</p>
    </div>
  )
}

export default App
