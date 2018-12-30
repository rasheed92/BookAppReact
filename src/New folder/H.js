import React from 'react'
import styled from 'styled-components'
import Context from './Context'


let Pusher = styled.div`

margin: 0;
padding: 0;
overflow-x: hidden;
min-width: 320px;
background: #fff;
font-family: 'Chronicle Display','Cormorant Garamond','Helvetica Neue',serif;
font-size: 14px;
color: rgba(71,71,71,.87);
`
let Fullheight = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-direction: row;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
flex-direction: row;
background-color: #FFFFFF;

`



let Sidebar = styled.div`
position: relative;
z-index: 1;
background-color: #1b1c1d;
width: 200px;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
`
let Verticalmenu = styled.div`
position: fixed;
    top: 0;
    left: 0;
    transition: none;
    will-change: transform;
    height: 100%!important;
    max-height: 100%;
    border-radius: 0!important;
    margin: 0!important;
    overflow-y: auto!important;
    display: block;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    left: 0px;
    height: 100%;
    top: 0px;
    width: 200px !important;
    border: 1px solid rgba(245, 245, 245, 0.75);
    border-radius: unset;
    box-shadow: none;
    background: #fff;
    font-size: 16px;
`



let Profile = styled.div`
display: grid;
margin: 20px 0;
border-bottom: 1px solid rgba(245, 245, 245, 0.75);
border-radius: .28571429rem .28571429rem 0 0;
`
let ProfileImg = styled.img`
width: 80px;
    height: auto;
    font-size: .85714286rem;
    margin-right: .25em;
    display: inline-block;
    border-radius: 500rem;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    border-style: none;
    margin-left: 50px;
`

let Name =styled.h4`
text-align: center;
`
let Links =styled.a`
padding: .7em 1.14285714em;
margin-left: 15px;
border-radius: 0;
box-shadow: none;
color: rgba(71,71,71,.95);
    font-weight: 400;
    display: block;
    background: 0 0;
    border-top: none;
    border-right: none;
    :hover {
        background: rgba(207, 249, 209, 0.75) !important;
      }
`
let Divider=styled.div`
margin: 10px 0;
    border-top: none;
    border-bottom: 1px solid rgba(245, 245, 245, 0.75);
    font-size: 1rem;
    margin: 1rem 0;
    line-height: 1;
    height: 0;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .05em;
    color: rgba(71,71,71,.85);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
`

let Article = styled.div`
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
min-width: 0px;
`
let Container=styled.div`
position: relative;
padding: 2em 0em 7em;
margin-left: 3em !important;
margin-right: 3em !important;
width: auto !important;
display: block;
max-width: 100%!important;
`
let Header=styled.div`
background: #FFFFFF;
position: fixed;
overflow: hidden;
top: 10px;
padding: 1em 0em 0em 12em;
width: 80%;
box-shadow: 0px 0px 0px 0px transparent;
border-bottom: 1px solid #00000017;
transition: padding 0.5s ease, background 0.5s ease, box-shadow 0.5s ease, border 0.5s ease;
font-size: 1rem;
max-width: 100%;
box-sizing: inherit;
margin-top: -10px;
`
let HeaderItems=styled.div`
display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin: 0 -.5em 1em;
    justify-content: space-between;
    
`
let Title=styled.div`
-webkit-box-flex: 0;
-ms-flex: 0 1 auto;
flex: 0 1 auto;
padding-left: .5em;
padding-right: .5em;


`
let Form=styled.div`
margin: 0;
padding: 0 1em 0 0;
flex: 0 1 auto;
width: auto;
    vertical-align: middle;
`
let SearchImg=styled.img`
cursor: default;
    position: absolute;
    line-height: 1;
    text-align: center;
    top: 0;
    right: 8px;
    margin-right: 6px;
    height: 107%;
    width: 1.4em;
    opacity: .5;
    border-radius: 0 .28571429rem .28571429rem 0;
    -webkit-transition: opacity .3s ease;
    -webkit-transition: opacity .;
    -webkit-transition: opacity .;
    transition: opacity .;
`
let SearchInput=styled.input`
font-family: sans-serif;
font-size: 1.1em;
position: relative;
font-weight: 400;
font-style: normal;
display: -ms-inline-flexbox;
display: -webkit-inline-box;
display: -webkit-inline-flex;
display: -ms-inline-flexbox;
display: -webkit-inline-box;
display: -webkit-inline-flex;
display: -ms-inline-flexbox;
display: inline-flex;
color: #d6d6d6;
height: 40px;
border: 1px solid rgba(245,245,245);
margin-top: 25px;
margin-top: 25px;
outline: none;
`
let Cards=styled.div`
margin-left: 13.25em;
margin-right: -.75em;
display: flex;
flex-wrap: wrap;
margin-top: 30px;
`
let Card=styled.div`
width: calc(16% - 1.5em);
margin-left: .75em;
margin-right: .75em;
margin-bottom: 20px;
`
let CardImg=styled.div`
padding: 1em 1em;
    background: #00000005 none;
    border: 1px solid rgb(225, 224, 224) !important;
    box-shadow: none;
    border-radius: .28571429rem !important;
    :hover {
        -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);

      }
`
let BookImg=styled.img`
display: block;
    width: 100%;
    height: auto;
    border-radius: inherit;


`
let CardContent=styled.div`
-webkit-box-flex: 1;
-ms-flex-positive: 1;
flex-grow: 1;
border: none;
border-top: 1px solid rgba(34,36,38,.1);
background: 0 0;
margin: 0;
padding: 1em 1em;
box-shadow: none;
font-size: 1em;

`
let BookTitle=styled.p`
font-weight: 700;
    font-size: 1.1em;
    margin-top: -.21425em;
    line-height: 1.4em;
    color: rgba(71, 71, 71, 0.85);

`
let Bookaother=styled.p`
font-size: 1em;
color: rgba(71,71,71,.4);

`

class H extends React.Component {
    constructor() {
        super()
        this.state={
        }   
    }
        
    
    render() {
        return (
            <Context.Consumer>
                {(ctx) => {
                    return <div>
                        <Pusher >
                            <Fullheight>
                              <Sidebar>
                                  <Verticalmenu>
                                <Profile>
                                    <ProfileImg src={require('../assets/img/user.png')}/>
                                    <Name >Jhon Doe</Name>
                                </Profile>
                                <Links ><b>New Realeases</b></Links>
                                <Links ><b>New Realeases</b></Links>
                                <Links ><b>New Realeases</b></Links>
                                <Links ><b>New Realeases</b></Links>
                                <Divider>
                                <Links >Setting</Links>
                                <Links >Logout</Links>
                                </Divider>
                                  </Verticalmenu>
                                  </Sidebar>  
                            </Fullheight>
                            <Article>
                        <Container>
                    <Header>
                   <HeaderItems>
                    <Title>
                        
              <h1>New Realeases</h1>  
      
                    </Title>
                    <Form>
                       
                    <SearchInput type="text" placeholder="  Search.."/>
                    <SearchImg  src={require('../assets/img/search.svg')} />
                    </Form>
                   </HeaderItems>
                    </Header>
                        </Container>
                            </Article>

                        </Pusher>
                        <Cards>
                        <Card>
                            <CardImg>
                                <BookImg src={require('../assets/img/asset 2.png')}/>
                            </CardImg>
                            <CardContent>
                    <BookTitle>The Infographic Book of Food</BookTitle>
                    <Bookaother>Vicki Turner</Bookaother>
                        </CardContent>
                        </Card>
                        <Card>
                            <CardImg>
                                <BookImg src={require('../assets/img/asset 3.png')}/>
                            </CardImg>
                            <CardContent>
                    <BookTitle>The Infographic Book of Food</BookTitle>
                    <Bookaother>Vicki Turner</Bookaother>
                        </CardContent>
                        </Card>
                        <Card>
                            <CardImg>
                                <BookImg src={require('../assets/img/asset 5.png')}/>
                            </CardImg>
                            <CardContent>
                    <BookTitle>The Infographic Book of Food</BookTitle>
                    <Bookaother>Vicki Turner</Bookaother>
                        </CardContent>
                        </Card>
                        <Card>
                            <CardImg>
                                <BookImg src={require('../assets/img/asset 4.png')}/>
                            </CardImg>
                            <CardContent>
                    <BookTitle>The Infographic Book of Food</BookTitle>
                    <Bookaother>Vicki Turner</Bookaother>
                        </CardContent>
                        </Card>
                        <Card>
                            <CardImg>
                                <BookImg src={require('../assets/img/asset 6.png')}/>
                            </CardImg>
                            <CardContent>
                    <BookTitle>The Infographic Book of Food</BookTitle>
                    <Bookaother>Vicki Turner</Bookaother>
                        </CardContent>
                        </Card>
                        <Card>
                            <CardImg>
                                <BookImg src={require('../assets/img/asset 7.png')}/>
                            </CardImg>
                            <CardContent>
                    <BookTitle>The Infographic Book of Food</BookTitle>
                    <Bookaother>Vicki Turner</Bookaother>
                        </CardContent>
                        </Card>
                        <Card>
                            <CardImg>
                                <BookImg src={require('../assets/img/asset 8.png')}/>
                            </CardImg>
                            <CardContent>
                    <BookTitle>The Infographic Book of Food</BookTitle>
                    <Bookaother>Vicki Turner</Bookaother>
                        </CardContent>
                        </Card>
                        <Card>
                            <CardImg>
                                <BookImg src={require('../assets/img/asset 12.jpeg')}/>
                            </CardImg>
                            <CardContent>
                    <BookTitle>The Infographic Book of Food</BookTitle>
                    <Bookaother>Vicki Turner</Bookaother>
                        </CardContent>
                        </Card>
                        <Card>
                            <CardImg>
                                <BookImg src={require('../assets/img/asset 2.png')}/>
                            </CardImg>
                            <CardContent>
                    <BookTitle>The Infographic Book of Food</BookTitle>
                    <Bookaother>Vicki Turner</Bookaother>
                        </CardContent>
                        </Card>
                        <Card>
                            <CardImg>
                                <BookImg src={require('../assets/img/asset 3.png')}/>
                            </CardImg>
                            <CardContent>
                    <BookTitle>The Infographic Book of Food</BookTitle>
                    <Bookaother>Vicki Turner</Bookaother>
                        </CardContent>
                        </Card>
                        <Card>
                            <CardImg>
                                <BookImg src={require('../assets/img/asset 5.png')}/>
                            </CardImg>
                            <CardContent>
                    <BookTitle>The Infographic Book of Food</BookTitle>
                    <Bookaother>Vicki Turner</Bookaother>
                        </CardContent>
                        </Card>
                        <Card>
                            <CardImg>
                                <BookImg src={require('../assets/img/asset 4.png')}/>
                            </CardImg>
                            <CardContent>
                    <BookTitle>The Infographic Book of Food</BookTitle>
                    <Bookaother>Vicki Turner</Bookaother>
                        </CardContent>
                        </Card>
                        <Card>
                            <CardImg>
                                <BookImg src={require('../assets/img/asset 6.png')}/>
                            </CardImg>
                            <CardContent>
                    <BookTitle>The Infographic Book of Food</BookTitle>
                    <Bookaother>Vicki Turner</Bookaother>
                        </CardContent>
                        </Card>
                        <Card>
                            <CardImg>
                                <BookImg src={require('../assets/img/asset 7.png')}/>
                            </CardImg>
                            <CardContent>
                    <BookTitle>The Infographic Book of Food</BookTitle>
                    <Bookaother>Vicki Turner</Bookaother>
                        </CardContent>
                        </Card>
                        <Card>
                            <CardImg>
                                <BookImg src={require('../assets/img/asset 8.png')}/>
                            </CardImg>
                            <CardContent>
                    <BookTitle>The Infographic Book of Food</BookTitle>
                    <Bookaother>Vicki Turner</Bookaother>
                        </CardContent>
                        </Card>
                        <Card>
                            <CardImg>
                                <BookImg src={require('../assets/img/asset 12.jpeg')}/>
                            </CardImg>
                            <CardContent>
                    <BookTitle>The Infographic Book of Food</BookTitle>
                    <Bookaother>Vicki Turner</Bookaother>
                        </CardContent>
                        </Card>
                        
                         </Cards>
                        </div>
                }}
            </Context.Consumer>
        )
    }
}

export default H;