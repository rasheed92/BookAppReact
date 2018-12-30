import React from 'react'
import styled from 'styled-components'
import Context from './Context'
import logo from './assets/img/logo2.svg';
import index from './assets/img/index.png';
import { Button } from 'evergreen-ui';
let Navigation = styled.header`
  background-color: #ffffff;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10%;
`
let BtnGroup = styled.div`
display: flex;
`


let Btn = styled.button`
background-color: #72a4ef;
height: 50px;
    width: 100px;
    border-radius: 5px;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
border: none;
color: white;
font-size: 15px;
font-family: sans-serif;
font-weight: bold;
`
let Links = styled.p`
font-size: 15px;
    font-family: sans-serif;
    font-weight: bold;
    margin-right: 60px;
`
let Container = styled.div`
display: flex;
padding: 0 10%;
`
let ImgBox = styled.div`
display: flex;
`
let Img = styled.img`
width:100%
`
let TextBox = styled.div`
font-family: 'Luckiest Guy', cursive;
display: block;
margin-top: 125px;
flex-basis: 430px;
`



class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            users:[]

        }
    }

    render() {
        return (
            <Context.Consumer>
                {
                    (ctx) => {
                        return (
                            <div>
                            <Navigation>
                                <div>
                                <img width="720px;" src={logo} />
                                </div>
                                <BtnGroup>
                                    <Links onClick={()=>{
                                           window.location.href='/books' 
                                    }}>Browse</Links>
                                    <Links onClick={()=>{
                                           window.location.href='/Login' 
                                    }}>Login</Links>
                                   <Button  appearance="primary" height={48} onClick={()=>{
                                           window.location.href='/register' 
                                    }}>Sing Up</Button>
                                </BtnGroup>

                            </Navigation>

                            <Container>
                                <TextBox>
                                   <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus blanditiis corporis saepe magni fuga necessitatibus nihil ab explicabo eum officiis. Inventore ea soluta quasi quos earum consequatur impedit assumenda iste!</p>
                                   <Button  appearance="primary" height={48} onClick={()=>{
                                           window.location.href='/register' 
                                    }}>Sing Up</Button>
                                </TextBox>
                                <ImgBox>
                                <Img src={index}/>
                                </ImgBox>
                      
                            </Container>
                            </div>
                        )
                    }
                }
            </Context.Consumer>
        )
    }
}

export default Home;