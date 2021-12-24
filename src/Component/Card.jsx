import React from 'react'
import styled from 'styled-components'
import Input from '../Component/Input'
import profile from '../images/user.png'
import padlock from '../images/padlock.png'
import email from '../images/email.png'

const MydivInput = styled.div`
background-color : white;
width : 350px;
height : 200px;
border: 1px  ;
padding: 150px;
border-radius: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap : 20px;
`
const divCheckBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 20px
`
const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    border: 1px solid #757575;
    border-radius: 3px;  
`;
const CreateButton = styled.button`
padding : 10px 10px;
background-color: #2a0845;
border-radius: 30px;
border: none;
color: white;
font-size: 18px;
cursor: pointer;
width: 300px;
margin-top: 10px;

`;

function Card() {
    return (

        <MydivInput>
            <div>
                <h2>Sign Up</h2>
            </div>
            <div>
                <Input placeholder="Name" icon={profile} />
                <Input placeholder="Email" icon={email} />
                <Input placeholder="Password" icon={padlock} />
            </div>
            <divCheckBox>
                <Checkbox type="checkbox" name="checkbox" id="checkbox" />
                <a>I read and i agree to Terms and conditions</a>
            </divCheckBox>
            <CreateButton>Create Account</CreateButton>
            <div >
                <p>Already have an account ? <a href="#">Sign in</a> </p>
            </div>
        </MydivInput>

    )
}

export default Card
