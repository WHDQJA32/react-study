import logo from '../logo.svg';
import './Practice001.css';
import {useState} from 'react';

function Practice001() {

    let txtArr = ['하나', '둘', '셋'];
    let [index, setIndex] = useState(0);

    return (
    <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {txtArr[index]}
        </p>
        <button onClick={()=>{

            setIndex((index+1)%txtArr.length); //인덱스에 1씩 더하면서 인덱스 길이만큼 나눈다.

            /*
            let value = (index + 1) == 3 ? 0 : (index + 1);
            setIndex(value);
            */
            /*
            index++;
            if(index > 2){
                index = 0;
            }
            setIndex(index);
            */
        }}>변경버튼</button>
        </header>
    </div>
    );

}

export default Practice001;
