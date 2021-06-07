import { useDispatch } from 'react-redux'
import { addQuestion } from '../redux';
import './Question.css';

export function Question({question,setQIndex}) {
    const dispatch = useDispatch();
    const onSubmit = (answer)=>{
        const isAnsweredCorrectly = question.correct_answer.toLowerCase()===answer.toString();
        dispatch(addQuestion({question:question.question,answer:isAnsweredCorrectly}));
        setQIndex(prev=>prev+1);
    }
    return (
      <div className="question">
        <div dangerouslySetInnerHTML={{__html: question.question}} />
        <button onClick={()=>onSubmit(true)}>true</button>
        <button onClick={()=>onSubmit(false)}>false</button>
      </div>
    );
}  