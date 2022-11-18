import React, {useState} from 'react';
import './Calculadora_design.css';
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculadora() {
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operador, setOperador] = useState();
        

    function InserirNum(e){
        
        var inserir = e.target.value;
       
        if (num === 0 ){
           
            setNum(inserir);
            
        }
        
        else{
            setNum(num + inserir);
        }

    }
    function Clear(){
        setNum(0);
    }
    
    function Porcentagem(){
        setNum(num / 100);
    }

    function MudarSinal(){
        if(num>0){
            setNum(-num)
        }
        else{
            setNum(Math.abs(num));
        }
    }

    function operatorHandler(e) {
        var operadorInput = e.target.value;
        setOperador(operadorInput);
        setOldNum(num);
       
        
      }

    function Calcular(){
        
        if (operador === "+"){
            setNum(parseFloat(oldnum) + parseFloat(num));
            
        }
        if (operador === "-"){
            setNum(parseFloat(oldnum) - parseFloat(num));
        }
        if (operador === "X"){
            setNum(parseFloat(oldnum) * parseFloat(num));
        }
        if (operador === "/"){
            setNum(parseFloat(oldnum) / parseFloat(num));
        }
    }

    return ( 
        <body>
            <h1>Calculadora em React</h1>
            <div>
                <Box m={2} />
                <Container maxWidth="xs">
                    <div className='wrapper'>
                            <Box m={1}/>
                            <h1 className='resultado'>{num}</h1>
                            <button onClick={Clear}>AC</button>
                            <button onClick={MudarSinal}>+/-</button>
                            <button onClick={Porcentagem}>%</button>
                            <button className="orange" onClick={operatorHandler} value={"/"}>/</button>
                            <button className="gray" onClick={InserirNum} value={7}>7</button>
                            <button className="gray" onClick={InserirNum} value={8}>8</button>
                            <button className="gray" onClick={InserirNum} value={9}>9</button>
                            <button className="orange" onClick={operatorHandler} value={"X"}>X</button>
                            <button className="gray" onClick={InserirNum} value={4}>4</button>
                            <button className="gray" onClick={InserirNum} value={5}>5</button>
                            <button className="gray" onClick={InserirNum} value={6}>6</button>
                            <button className="orange" onClick={operatorHandler} value={"-"}>-</button>
                            <button className="gray" onClick={InserirNum} value={1}>1</button>
                            <button className="gray" onClick={InserirNum} value={2}>2</button>
                            <button className="gray" onClick={InserirNum} value={3}>3</button>
                            <button className="orange" onClick={operatorHandler} value={"+"}>+</button>
                            <button className="zero"  onClick={InserirNum} value={0}>0</button>
                            <button className="gray" onClick={InserirNum} value={"."}>,</button>
                            <button className="orange" onClick={Calcular}>=</button>
                        </div>
                </Container>
                
            </div>
        </body>
    );
} 

