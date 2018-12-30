import React from 'react'
import styled from 'styled-components'
import Context from './Context'
import { Button,toaster ,TextInput} from 'evergreen-ui';
import BackgroundImg from './assets/img/r.png';
import loginlogo from './assets/img/loginlogo.svg';
import Cookies from 'universal-cookie';
import axios from  'axios';


const cookies = new Cookies();









let Background = styled.img `
width: 66%;
height: 100%;
left: 0px;
bottom: 0px;
right: 0px;
position: absolute;
padding: 0px;
margin: 0px;
margin-left: 35%;
z-index: 1;
`

let Container = styled.div `
padding:0px 13.5%;
margin-top:6em;
`

let Form = styled.div `
position:absolute;width:auto;
max-width:650px;
height:100%;
background-color:white;
top:0px;
left:0px;
bottom:0px;
z-index:10;
background-color: #8aafed;
`

let TextCon = styled.div `
width:100%;
text-align:center;
padding-bottom:4em 
`
let Text = styled.span `
font-family: 'Noto Sans', sans-serif;
font-size:35px;
color:#ffff;
`
let ButtonCon = styled.div `
width:100%;
display:flex;
align-items:center;
justify-content:center
`
let Logo = styled.img `
width: 458px;
margin-top: -55px;
margin-left: 30px;
`


class Registration extends React.Component {
    constructor() {
        super()
        this.state ={
            Email:'',
            Password:'',
            Name:'',
            Age:'',

        }
    }
    onChangeEmail(value){
        this.setState({
          Email: value
        })
      }
      onChangeAge(value){
        this.setState({
            Age: value
        })
      }
      onChangeName(value){
        this.setState({
            Name: value
        })
      }
      onChangePassword(value){
        this.setState({
          Password: value
        })
      }
      Register(){


        axios.post('https://books-store-backend2.herokuapp.com/api/user/register', {
            name:this.state.Name,
            email:this.state.Email,
            age:this.state.Age,
            password:this.state.Password
          })   .then(function (response) {
            if (response.status == 200) {
                toaster.success(
                    'register successfully'
                )
                                                                                //cookies expires in 7 days

                cookies.set('token', response.data, { path: '/', expires: new Date(Date.now()+604800000)});
               
                    window.location.href = '/books'
     
            }
            
       
        }).catch(function (error) {
            if (error.response) {

                if (error.response.data.errmsg) {
                   
                    toaster.danger(
                      'Email already in use '
                    ) 
                    // console.log()
                } else if (error.response.data.details[0].message){
                        toaster.danger(
                        error.response.data.details[0].message
                    ) 
                   
                }
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });








    //       .then(function (response) {
         
             
    //    cookies.set('token', response.data, { path: '/', expires: new Date(Date.now()+259200000)});                              
    //      console.log(response.data);
    //     // window.location.href='/books' 
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });





        // fetch('https://books-store-backend2.herokuapp.com/api/user/register', {
        //     method: 'post',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         name:this.state.Name,
        //         email:this.state.Email,
        //         age:this.state.Age,
        //         password:this.state.Password
        //     })
        // }).then((response) => {
        //     console.log(response)
        //   return response.json()
            
        //   }).then((data) => {
        //     console.log(data)
        //     if (data.isJoi) {
           
        //         alert(data.details[0].message)   
        //     } else {
        //         window.location.href='/books' 
        //     }
         
        //     ///this process use to filter from api and add only useful data to our arry news
            
        //    // console.log(data.details[0].message)
        //   });

      }
      
      


    render() {
        return (
            <Context.Consumer>
                {(ctx) => {
                    return <div>

<Background src={BackgroundImg}/> 

    <Form >
        <Container>
            <TextCon>
            <Logo  src={loginlogo} />
                <Text>Register</Text>
            </TextCon>
          
                <TextInput  width="75%" height={44} marginLeft={70} marginBottom={16} value={this.state.Email} onChange={(event)=>{
                               this.onChangeEmail(event.target.value)
                            }}  type="email"  placeholder="  Email"/>
         
              
                <TextInput width="75%" height={44} marginLeft={70} marginBottom={16} type="text" value={this.state.Name} onChange={(event)=>{
                               this.onChangeName(event.target.value)
                            }} placeholder="  Name"/>
      
        
            
                <TextInput width="75%" height={44} marginLeft={70} marginBottom={16} type="text" value={this.state.Age} onChange={(event)=>{
                               this.onChangeAge(event.target.value)
                            }} placeholder="  Age"/>
        
               
                <TextInput width="75%" height={44} marginLeft={70} marginBottom={16} type="password"  value={this.state.Password} onChange={(event)=>{
                               this.onChangePassword(event.target.value)
                            }} placeholder="  Password"/>
        
            <ButtonCon>
                {/* <Button onClick={this.Register.bind(this)}>Register</Button> */}

                <Button appearance="primary" intent="primary" iconBefore="confirm" height={50} onClick={() =>{ this.Register()}}>
                Register</Button>
            </ButtonCon>
        </Container>
    </Form>
                        </div>
                }}
            </Context.Consumer>
        )
    }
}

export default Registration;