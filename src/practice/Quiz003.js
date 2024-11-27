import './Quiz003.css';
import {useState} from 'react';

function Quiz003() {
    
    let [boxes, setBoxes] = useState([<div className='box'>박스</div>]); //배열화

    let [arr, setArr] = useState([1]);
    //for(let i=0; i<5; i++){
    //    boxes.push(<div className='box'>박스</div>);
    //}
    
    return (
        <div>
            <div style={{margin:'10px'}}> 
                <button onClick={()=>{
                    let temp = [...arr]; //선언
                    temp.push(0);   //선언한 변수에 배열추가
                    //let temp = [...arr , 1];
                    //let temp = [0, ...arr]; ...은 배열을 벗겨내고 앞 뒤로 추가시킨다.
                    setArr(temp);
                    //temp.unshift(0); 배열 앞에 추가하는 함수 
                }}>추가</button>
            </div>
            {
                arr.map(()=>{
                    return <div className='box'>박스</div>;
                })
            }
        </div>
    )

    /*
    return (
        <div>
            <div style={{margin:'10px'}}> 
                <button onClick={()=>{
                    let temp = [...boxes];
                    temp.push(<div className='box'>박스</div>); //push 배열의 추가
                    setBoxes(temp);
                }}>추가</button>
            </div>
            {
                boxes
            }
        </div>
    );
    */
}

export default Quiz003;