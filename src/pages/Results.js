import { useSelector } from 'react-redux'

export function Results() {
  const results = useSelector((state) => state.results.value)
  console.log('results',results);
  const calculateTotal = ()=>{
    const answers = results.map((val)=>val.answer);
    return answers.reduce((acc,curr)=>(curr) ? acc+1 : acc,0);
  }
  return (results.length> 0 ? (
    <>
    <div>Total correct answers: {calculateTotal()}</div>
    {
    results.map((result)=>(<><div>{result.question}</div>
    <div>{result.answer.toString()}</div>
    </>))
    }
    </>
):(<div>Couldn't retreive any results</div>));
}
