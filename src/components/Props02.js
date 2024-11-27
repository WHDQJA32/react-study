import Box from "./Box";
import {useState} from 'react';

function Props02(){

    //point -> 배열이 state 변수처리 -> 재렌더링이 일어나도 데이터가 유지
    let [textArr, setTextArr] = useState(['아침', '점심', '저녁', '야식']);
    let [detailArr, setdetailArr] = useState(['배고프다', '졸리다', '피곤하다', '행복하다']);
    //let [num, setNum] = useState(0); //num = 0;


    return (
        <div>
            {
                textArr.map((item, index)=>{
                    //return <Box text={item} detail={detailArr[index]}/> 
                    return <Box text={textArr[index]} detail={detailArr[index]}/>
                })
            }
            <button onClick={()=>{
                //이 버튼을 누르면
                //화면에 내용이 추가로 표시됩니다.
                //두번째 야식
                //살찐다.
                    textArr.push('두번째 야식')
                    detailArr.push('살찐다')
                    console.log(textArr);
                    console.log(detailArr);

                    //재렌더링을 위해서 state 변수 변경(set함수를 통해서)
                    //setNum(num + 1); //기본타입 변수(state)
                    setTextArr(textArr); //참조타입 변수 (배열)
                    setdetailArr(detailArr); //참조타입 변수 (배열)
            }}>추가버튼</button> 
        </div>
    );
}

export default Props02;