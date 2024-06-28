import reactLogo from './assets/react.svg';
import { FetchRes } from './components/FetchRes';
import { Wrapper } from './components/Wrapper';
import './App.css';
const url = import.meta.env.VITE_URL;

function App() {

  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <Wrapper text = { 'First request:' }>
          <FetchRes opts = {'data'} url = { url }/>
        </Wrapper>
        <Wrapper text = { 'Second request:' }>
          <FetchRes opts = {'error'}  url = { url }/>
        </Wrapper>
        <Wrapper text = { 'Third request:' }>
          <FetchRes opts = {'loading'} url = { url }/>
        </Wrapper>

      </div>
    </>
  )
}

export default App

/*        <div><p>First request: </p><FetchRes opts = {'data'}/></div>
        <div><p>Second request: </p><FetchRes opts = {'error'}/></div>
        <div><p>Third request: </p><FetchRes opts = {'loading'}/></div>*/