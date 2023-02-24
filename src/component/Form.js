import React from "react";
import './form.css'
const Form = (props) => {
    const handlename = (event) => {
        const changenm = event.target.value
        props.setname(changenm)
        console.log('name', changenm)
    }
    const handlepassword = (event) => {
        const changepwd = event.target.value
        props.setpassword(changepwd)
        console.log('password', changepwd)
    }
    const onsubmit = () => {
        props.setlogin(true)
    }
    return (
        <>
            <div id="form">
                <form>
                    <p>Enter Name :  <input type="text" onChange={handlename} /></p>
                    <p>Enter Password :  <input type="password" onChange={handlepassword} /></p>
                    <p><button onClick={onsubmit}>Submit</button></p>
                </form>
            </div>
        </>
    )
}
export default Form;