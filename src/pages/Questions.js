import { useState,useEffect } from 'react';
import {Question} from '../components';
import { useDispatch } from 'react-redux'
import { nextStep } from '../redux';
import { questions } from '../lib/questions';

export function Questions() {
  const [qList,setQList] = useState([]);
  useEffect(() => {
    async function fetchQuestions() {
      let newQuestions = [];
      let {response_code,results} = await questions();
      if(response_code === 0){
        setQList(results);
          newQuestions = results;
      } else{
        setQList([]);
      }
      return newQuestions;
    }
    fetchQuestions()
  }, []);
  const dispatch = useDispatch();
  const checkResults = ()=>{
    dispatch(nextStep());
  }
  const [qIndex,setQIndex] = useState(0);

  return (qList.length > 0) ? (
    <div >
      {(qIndex===qList.length) ? (<button onClick={()=>checkResults()}>
        Check Results
      </button>) : (<Question question={qList[qIndex]} setQIndex={setQIndex}/>)}
    </div>
  ): <div>Loading...</div>;
}

