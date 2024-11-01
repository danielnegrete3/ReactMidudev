
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import './App.css'
import { TextArea } from './components/TextArea'
import { FromLanguage, Languages, SectionTypesConst } from './types/Translate.d'
import { LanguageSelector } from './components/LanguageSelector'
import { useTranslate } from './hooks/useTranslate'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from './consts/languages'
import { ArrowsIcon, ClipboardIcon, SpeakerIcon } from './components/Icons'
import { useDebounce } from './hooks/useDebounce'
import { useEffect } from 'react'
import { Translate } from './services/Translate'

function App() {
  const {
      setFromLanguage,fromLanguage,
      setToLanguage, toLanguage,
      setFromText, text,
      setToText, result,
      swapLanguage, isLoading
    } = useTranslate()

    const debouncedValue = useDebounce(text)


  const onChangeFromText= (value:string) =>{
      setFromText({text:value}) 
  }

  const onchangeToText = (value:string)=>{
    setToText({text:value}) 
  }

  const onChangeFromLanguage = (value: FromLanguage)=>{
    setFromLanguage({language:value})
  }

  const onChangeToLanguage = (value: Languages)=>{
    setToLanguage({language:value})
  }

  useEffect(()=>{
    if (debouncedValue === '') return
    Translate({toLanguage,fromLanguage,text:debouncedValue})
    .then(newResult => {
        if(newResult == null) return 
        setToText({text:newResult})
      }
    ).catch(()=>{
      setToText({text:"Error"})
    })
  },[debouncedValue,fromLanguage,toLanguage])

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => {})
  }

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = SUPPORTED_LANGUAGES[toLanguage]
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }

  return (
    <Container fluid>
      <h2 style={{color: 'white'}}>Google Translate</h2>
      <Row >
          <Col style={{ maxWidth: 'fit-content' }} xs={12} md={5}>
            <Stack gap={2} >
              <LanguageSelector 
                type={SectionTypesConst.From} 
                value={fromLanguage}
                onChange={onChangeFromLanguage}
              />
              <TextArea 
                value={text}
                loading={false}
                onChange={onChangeFromText}
                type={SectionTypesConst.From}
              />
            </Stack>
          </Col>

          <Col xs='auto' style={{ maxWidth: 'fit-content' }} >
            <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={swapLanguage} style={fromLanguage === AUTO_LANGUAGE ?{} :{background: '#f0f0f0'}}>
              <ArrowsIcon />
            </Button>
          </Col>

        <Col xs={12} md={5} style={{ maxWidth: 'fit-content' }}>
            <Stack gap={2} >
              <LanguageSelector 
                type={SectionTypesConst.To} 
                value={toLanguage}
                onChange={onChangeToLanguage}
              />
              <div style={{ position: 'relative' }}>
                <TextArea 
                  value={result}
                  loading={isLoading}
                  onChange={onchangeToText}
                  type={SectionTypesConst.To}
                />
                
                <div style={{ position: 'absolute', left: 0, bottom: 0, display: 'flex' }}>
                  <Button
                    variant='link'
                    onClick={handleClipboard}>
                      <ClipboardIcon />
                  </Button>
                  <Button
                    variant='link'
                    onClick={handleSpeak}>
                      <SpeakerIcon />
                  </Button>
                </div>
              </div>
              
            </Stack>
          </Col>
      </Row>
    </Container>
  )
}

export default App
