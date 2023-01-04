import {ScreenSplit} from './ScreenSplit';
const LeftComponent = ({name})=>{
  return <h1 style={{backgroundColor:"red"}}>{name}</h1>;
}
const RightComponent = ({message})=>{
  return <p style={{backgroundColor:"green"}}> {message}</p>;
}
function App() {
  return (
    <div className="App">
      <ScreenSplit leftWeight={1} rightWeight={3}>
        <LeftComponent name="kevin"/>
        <RightComponent message=" hello there"/>
      </ScreenSplit>
    </div>
  );
}

export default App;
