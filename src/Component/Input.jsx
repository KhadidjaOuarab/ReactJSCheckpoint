import React from 'react'
import styled from 'styled-components'

const Myinput = styled.input`
width : 380px;
height : 30px;
border-radius : 15px;
padding-left : 30px;
box-shadow: 0px 0px 10px 10px violet;
`

const Myicone = styled.img`
width : 25px;
height : 25px;
position : absolute
`

const DivInput = styled.div`
display: flex;
position : relative;
margin-bottom : 10px
`

function Input(props) {
    return (
        <DivInput>
            <Myicone src={props.icon} alt="icon" />
            <Myinput type="text" placeholder={props.placeholder} />
        </DivInput>
    )
}

export default Input
