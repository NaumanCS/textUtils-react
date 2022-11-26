// import React from 'react'
import Navbar from './Navbar'
// import Navbar from './components/Navbar';
import TextForm from './TextForm';
import React, { useState } from 'react';
import Alert from './Alert';

export default function Home() {
    const [mode, setmode] = useState('light');  //It will tell Whether Dark Mode is enabled or not
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setmode('dark');
            document.body.style.backgroundColor = 'gray';
            showAlert("Dark Mode is enable", "success");
            setTextColor('white');
            document.title = "TextUtils - Dark Mode";
            // setInterval(() => {
            //   document.title = "TextUtils is amazing";
            // }, 2000);
        }
        else {
            setmode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode is enable", "success");
            setTextColor('black');
            document.title = "TextUtils - Home";
        }
    }
    const changeTextColor = () => {
        setTextColor('blue');
    }
    const [textColor, setTextColor] = useState({
        color: 'black'
    });
    return (
        <>
            <div>
                <Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <TextForm mode={mode} changeTextColor={changeTextColor} textColor={textColor} showAlert={showAlert} heading="Enter the text to analyze below" />
            </div>
   </> 
  )
}
