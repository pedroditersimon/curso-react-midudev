import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import './App.css';
import { useTranslateReducer } from './Hooks/useTranslateReducer';
import { ArrowsIcon, ClipboardIcon, SpeakerIcon } from './components/Icons';
import { LangSelector } from './components/LangSelector';
import { OptionType } from './types.d';
import { TextArea } from './components/TextArea';
import { useEffect } from 'react';

function App() {
  const { loading, fromLang, toLang, fromText, result, setFromText, setResult, interchangeLang, setFromLang, setToLang } = useTranslateReducer();

  useEffect(() => {
    const timer = setTimeout(() => setResult(fromText), 1000);
    return () => clearTimeout(timer);
  }, [fromText, fromLang, toLang, setResult]);

  const handleClipboard = () => {
    navigator.clipboard.writeText(result);
  };

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result);
    utterance.lang = toLang;
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
  };

  return (
    <Container fluid>
      <h1>Trasnlator</h1>

      <Row>
        <Col>
          <LangSelector
            type={OptionType.From}
            value={fromLang}
            onChange={setFromLang} />
          <TextArea
            type={OptionType.From}
            value={fromText}
            onChange={setFromText}
          />
        </Col>

        <Col>
          <Button onClick={interchangeLang} disabled={fromLang === 'auto'}>
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <LangSelector
            type={OptionType.To}
            value={toLang}
            onChange={setToLang} />
          <div style={{ position: 'relative' }}>
            <TextArea
              loading={loading}
              type={OptionType.To}
              value={result}
              onChange={setResult}
            />
            <div style={{ position: 'absolute', left: 0, bottom: 0, display: 'flex' }}>
              <Button
                variant='link'
                onClick={handleClipboard}
              >
                <ClipboardIcon />
              </Button>
              <Button
                variant='link'
                onClick={handleSpeak}
              >
                <SpeakerIcon />
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
