import { useDispatch } from 'react-redux'
import { nextStep } from '../redux';

export function Home() {
  const dispatch = useDispatch();
  const onStart = ()=>{
    dispatch(nextStep());
  }
  return (<div>Lets Start
      <button onClick={()=>onStart()}>Begin</button>
  </div>);
}