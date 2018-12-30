import React from 'react'
import styled from 'styled-components'
import Context from './Context';
import { Button, CornerDialog,toaster,Pane,Select,Popover,Position,Menu,
    FilePicker,Heading,Tooltip,Icon,SearchInput,Autocomplete,TextInput,Dialog ,Pill,Badge } from 'evergreen-ui';
import Component from "@reactions/component";
import Userimg from './assets/img/user.png';
import Cookies from 'universal-cookie';
import axios from  'axios';


var BookFile;
var BookCover;
var fileImg;
const cookies = new Cookies();
var getcategoryID;









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
let ToolsDiv = styled.div`
justify-content: space-between;

display: flex;


`
let InfoDiv = styled.div`
position: relative;
margin-top:10px
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
        background: #8aafed !important;
      }
`
let AdminLinks =styled.a`
padding: .7em 1.14285714em;
margin-left: 15px;
border-radius: 0;
box-shadow: none;
color: rgba(195, 195, 195, 0.75);
    font-weight: 400;
    display: block;
    background: 0 0;
    border-top: none;
    border-right: none;
    :hover {
        background: #8aafed !important;
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
let AdminDiv=styled.div`
margin: 10px 0;
border-top: none;
border-bottom: 1px solid rgba(245, 245, 245, 0.75);

`
let Form=styled.div`
margin: 0;
padding: 0 1em 0 0;
flex: 0 1 auto;
width: auto;
    vertical-align: middle;
    margin-top: 20px;
`

let Cards=styled.div`
margin-left: 13.25em;
margin-right: -.75em;
display: flex;
flex-wrap: wrap;
margin-top: 30px;
`
let FromInput=styled.input`
margin-bottom: 16px;
padding-right: 10px;
padding-left: 10px;
width: 100%;
line-height: 16px;
font-weight: 400;
color: #425A70;
height: 32px;
border-radius: 3px;
font-size: 12px;
font-family: "SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
box-sizing: border-box;
-webkit-appearance: none;
-moz-appearance: none;
border: none;
background-color: white;
box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.3), inset 0 1px 2px rgba(67, 90, 111, 0.14);
padding: 1px 5px;    
text-rendering: auto;
color: initial;
letter-spacing: normal;
word-spacing: normal;
text-transform: none;
text-indent: 0px;
text-shadow: none;
display: inline-block;
text-align: start;

-webkit-writing-mode: horizontal-tb !important;


`
let FromTextarea=styled.textarea`
margin-bottom: 16px;
padding-right: 10px;
padding-left: 10px;
width: 100%;
line-height: 16px;
font-weight: 400;
color: #425A70;
min-height: 80px;
border-radius: 3px;
font-size: 12px;
font-family: "SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
box-sizing: border-box;
-webkit-appearance: none;
-moz-appearance: none;
border: none;
background-color: white;
box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.3), inset 0 1px 2px rgba(67, 90, 111, 0.14);
padding: 1px 0px;    text-rendering: auto;
color: initial;
letter-spacing: normal;
word-spacing: normal;
text-transform: none;
text-indent: 0px;
padding: 1px 5px;    
text-shadow: none;
display: inline-block;
text-align: start;

-webkit-writing-mode: horizontal-tb !important;


`




let Card=styled.div`
width: calc(16% - 1.5em);
margin-left: .75em;
margin-right: .75em;
margin-bottom: 20px;

:hover {
    -moz-transform: scale(1.1);
-webkit-transform: scale(1.1);
transform: scale(1.1);

  }
`
let CardImg=styled.div`
padding: 1em 1em;
    background: #00000005 none;
    border: 1px solid #8aafed !important;
    box-shadow: none;
    border-radius: .28571429rem !important;
    margin-left: 10px;
`
let BookImg=styled.img`
display: block;
    width: 100%;
    height: auto;
    border-radius: inherit;
    min-height: 300px;
    max-height: 300px;


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
let Sort=styled.div`

margin-left: 769px;
margin-top: 26px;
`
let DescriptionDiv=styled.div`
max-height: 150px;
min-height: 150px;

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


class Books extends React.Component {
    constructor() {
        super()
        this.state = {
            books:[],
            categories:[],
            category: '',
            FindBycategory:'',
            fileSize:1111,
            Search:'',
            Sort:'',
            session:[],           
             Email:'',
            Password:'',
            Name:'',
            Age:'',
            Img:'',
           
            
    
        }
        // this.onChangeImg = this.onChangeImg.bind(this);
        this.categoryDidMount()

    }

    onChangeSearch(value) {
        this.setState({
            Search: value
        })

        this.componentDidMount(this.state.Search, this.state.Sort)

    }
    categorychange(e) {
        getcategoryID=e

        console.log(getcategoryID)  
    }
    onChangeBookCover(e) {
       
        BookCover=e[0];

        console.log(BookCover)  
    }
    onChangeImg(e) {
       
        fileImg=e[0];

        console.log(fileImg)  
    }
    onChangeAge(value) {
        this.setState({
            Age: value
        })
        

        console.log(value)
    }
    onChangeName(value) {
        this.setState({
            Name: value
        })
        

        console.log(this.state.fileSize)
    }
    onChangeFile(value) {
        BookFile=value[0]
        this.setState({
            fileSize: value[0].size
        })
     
        

        console.log(this.state.fileSize)
    }
    onSort(value) {

        this.setState({
            Sort: value
        })
        console.log(value)
        console.log(this.state.Sort)
        this.componentDidMount(this.state.Search, value)

    }
    findByCategory(value) {
        this.setState({
            Search:''
        })
        console.log(value)
        if (value == 'all') {
            this.componentDidMount(this.state.Search, this.state.Sort)
        } else {

            this.componentDidMount(this.state.Search, this.state.Sort, value)

        }

    }
    onChangeDelete(value) {



        axios({
            method:'DELETE',
            url:`https://books-store-backend2.herokuapp.com/api/book/${value}`,
            headers: { 'token': cookies.get('token') }
          })
          .then(function (response) {
            toaster.success(
                'Book has been deleted successfully'
            )
            setTimeout(function () {
                window.location.href = '/books'
            }, 500);
          })
          .catch(function (error) {
            toaster.danger(
                'oops something went wrong '
            )
            console.log(error);
          });
    }

    downloadCounte(value) {
        if (!this.state.session || this.state.session.name == 'Guest') {
            document.location.href = "/login";
        } else {

            
            axios.post(`https://books-store-backend2.herokuapp.com/api/book/downloads/${value._id}`, {
                category_id: value.category,
                downloads: value.downloads + 1,
         })
         .then(function (response) {
                                   
           
            window.location.href = 'https://books-store-backend2.herokuapp.com/' + value.file
         })
         .catch(function (error) {
           if (error.response) {
           
               toaster.danger(
                   'please check your email address and password and try again '
                 )
          
             
           } 
         });
        }

            



        //     console.log(value)
        //     fetch(`https://books-store-backend2.herokuapp.com/api/book/downloads/${value._id}`, {
        //         method: 'post',
               
        //         headers: { 'token': cookies.get('token') },
        //         body: JSON.stringify({
        //             category_id: value.category,
        //             downloads: value.downloads + 1,
        //         })
        //     }).then((response) => {
        //         console.log(response)
        //         return response.json()

        //     }).then((data) => {
        //         console.log(data)
        //     });
        //     window.location.href = 'https://books-store-backend2.herokuapp.com/' + value.file

        // }
    }

    ToSubmitmyForm() {
        document.getElementById("myForm").submit();
        this.setState({
            fileSize: null
        })
    }
    Onlogout() {
        fetch('https://books-store-backend2.herokuapp.com/api/user/logout/logout', {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => {
        
                cookies.remove('token')
                document.location.href = "/";
     
            return response

        }).then((data) => {
        })
    }

    
    UpdateProfile() {
        let formData = new FormData()
        formData.append('name',this.state.Name)
        formData.append('age',this.state.Age)
        formData.append('file',fileImg)
        formData.append('token',cookies.get('token'))

        axios({
            url:`https://books-store-backend2.herokuapp.com/api/user/edit/${this.state.session.id}`,
            method:"POST",
            data:formData
        })

          .then(function (response) {
            if (response.status==200) {
                toaster.success(
                    'your profile has been updated successfully Re-loging  '
                  )
                  setTimeout(function(){  window.location.href='/login'  }, 1500);
            }
            
          console.log()  
          }).catch(function (error) {

          });
    

    }

    categoryDidMount() {
        fetch(`https://books-store-backend2.herokuapp.com/api/category/`,{
            method: 'get',
            
            credentials: "same-origin",
            headers: { 'token': cookies.get('token') }}
            ).then((response) => {
                console.log(response)
                return response.json()

            })
            .then((data) => {

                this.setState({
                    categories: data
                })
            })

    }

    componentDidMount(Search = this.state.Search, Sort, category_id) {

        if (category_id) {
            fetch(`https://books-store-backend2.herokuapp.com/api/book/category/${category_id}`,{
                    method: 'get',
                    
                    credentials: "same-origin",
                    headers: { 'token': cookies.get('token') }
                 
                }
            )
                .then((response) => {
                    console.log(response)
                    if (response.status == 200) {
                        return response.json()
                    }




                })
                .then((data) => {

                    this.setState({
                        books: data


                    })
                    let gettitles = [];
                    for (let i = 0; i < this.state.books.length; i++) {
                        gettitles.push(this.state.books[i].title);

                    }
                    this.setState({
                        titles: gettitles,
                        FindBycategory: ''

                    })
                })


        } else {

            fetch(`https://books-store-backend2.herokuapp.com/api/book?q=${Search}&sort=${Sort}`,{
                credentials: "same-origin",
                headers: { 'token': cookies.get('token') }

            })
                .then((response) => {
             
                    if (response.status == 200) {
                        return response.json()
                    }

                })
                .then((data) => {
                    console.log(data)
                    if (data[1].session == 'Guest') {
                        this.setState({
                            session: data[1].session,
                            books: data[0].data,
                        })
                    }
                    if (data[1].session == 'TokenExpiredError') {
                        document.location.href = "/login";
                    } else {
                        this.setState({
                            session: data[1].session,
                            books: data[0].data,
                        })
                    }


                    let gettitles = [];
                    for (let i = 0; i < this.state.books.length; i++) {
                        gettitles.push(this.state.books[i].title);

                    }
                    this.setState({
                        titles: gettitles


                    })
                })

        }

    }


    AddBook() {

        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let description = document.getElementById("description").value;
        let pages = document.getElementById("pages").value;
        let PublishedAt = document.getElementById("PublishedAt").value;
        let formData = new FormData()
        formData.append('title', title)
        formData.append('author', author)
        formData.append('pages', pages)
        formData.append('PublishedAt', PublishedAt)
        formData.append('description', description)
        formData.append('token', cookies.get('token'))
        formData.append('category_id', getcategoryID)
        formData.append('BookCover', BookCover)
        formData.append('fileSize', this.state.fileSize)
        formData.append('file', BookFile)
        axios({
                url: `https://books-store-backend2.herokuapp.com/api/book/add`,
                method: "POST",
                data: formData
            })

            .then(function (response) {
                if (response.status == 200) {
                    toaster.success(
                        'Book has been Added successfully'
                    )
                    setTimeout(function () {
                        window.location.href = '/books'
                    }, 500);
                }

                console.log()
            }).catch(function (error) {
                if (error.response) {
                    toaster.danger(
                        error.response.data.details[0].message
                    )
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });

    }

    Editbook(book) {

        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let description = document.getElementById("description").value;
        let pages = document.getElementById("pages").value;
        let PublishedAt = document.getElementById("PublishedAt").value;
        let formData = new FormData()
        formData.append('title', title)
        formData.append('author', author)
        formData.append('pages', pages)
        formData.append('PublishedAt', PublishedAt)
        formData.append('description', description)
        formData.append('token', cookies.get('token'))
        formData.append('category_id', getcategoryID)
        formData.append('BookCover', BookCover)
        formData.append('fileSize', this.state.fileSize)
        formData.append('file', BookFile)
        formData.append('downloads', book.downloads)
        axios({
                url: `https://books-store-backend2.herokuapp.com/api/book/edit/${book._id}`,
                method: "POST",
                data: formData
            })

            .then(function (response) {
                if (response.status == 200) {
                    toaster.success(
                        'Book has been Edit successfully'
                    )
                    setTimeout(function () {
                        window.location.href = '/books'
                    }, 500);
                }

                console.log()
            }).catch(function (error) {
                if (error.response.data.details[0].message) {
                    toaster.danger(
                        error.response.data.details[0].message
                    )
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });

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
                                            <ProfileImg style={this.state.session.name == 'Guest' ? { display: 'none' } : {}} src={'https://books-store-backend2.herokuapp.com/' + this.state.session.porfileImg} />
                                            <Name >{this.state.session.name}</Name>
                                        </Profile>
                                        <div>
                                            <Links onClick={this.findByCategory.bind(this, 'all')}><b>All Categories</b></Links>
                                            {
                                                this.state.categories.map((category, i) => (
                                                    <Links key={category._id} onClick={this.findByCategory.bind(this, category._id)}><b>{category.name}</b></Links>
                                                ))}
                                        </div>
                                        <Divider>
                                            <AdminDiv>

                                                <Component initialState={{ isShown: false }}>
                                                    {({ state, setState }) => (
                                                        <React.Fragment>
                                                            <CornerDialog
                                                                onConfirm={this.AddBook.bind(this)}
                                                                confirmLabel="Add "
                                                                title="Add a New Book"
                                                                isShown={state.isShown}
                                                                onCloseComplete={() => setState({ isShown: false })}
                                                            >
                                                                <React.Fragment>
                                                                
                                                                                          
                                                                        <FromInput type="hidden" value={this.state.fileSize} placeholder="  FileSize" name="fileSize" required />
                                                                     
                                                                     
                                                                     
                                                                        <FromInput type="text" id="title" placeholder="  Title" name="title" required />
                                                                        <FromInput type="text" id="author" placeholder="  Author" name="author" required />
                                                                        <FromInput type="number" id="pages" placeholder="  Pages Number" name="pages" required />
                                                                        <FromInput type="date" id="PublishedAt" placeholder="  Published Date" name="PublishedAt" required />
                                                                        <FromTextarea placeholder="  Description" id="description" name="description" required />

                                                                        <Heading size={400} width="100%" marginBottom={10} >Select Category</Heading>
                                                                        <Select onChange={(event)=>{this.categorychange(event.target.value)}}   width="100%" name="category_id"
                                                                            marginBottom={10}>
                                                                            <option checked>Select Category</option>
                                                                            {
                                                                                this.state.categories.map((category, i) => (

                                                                                    <option  key={category._id} value={category._id} >{category.name}</option>
                                                                                ))}

                                                                        </Select>
                                                                        <Heading size={400} width="100%" marginBottom={10} >Book Cover</Heading>
                                                                        <FilePicker name="bookImg"
                                                                          onChange={files => this.onChangeBookCover(files) }
                                                                            multiple
                                                                            width="100%"
                                                                            accept="image/*"
                                                                            marginBottom={15}
                                                                        />
                                                                        <Heading size={400} width="100%" marginBottom={10} > Book File</Heading>


                                                                        <FilePicker name="file"
                                                                            multiple
                                                                            width="100%"
                                                                            placeholder="Description..."
                                                                            marginBottom={32}
                                                                         
                                                                            onChange={files => this.onChangeFile(files)}
                                                                        />

                                                                </React.Fragment>
                                                            </CornerDialog>

                                                            <AdminLinks style={this.state.session.role ? {} : { display: 'none' }} onClick={() => setState({ isShown: true })}>Add Book</AdminLinks>
                                                        </React.Fragment>
                                                    )}
                                                </Component>
                                            </AdminDiv>

                                            <Component initialState={{ isShown: false }}>
                                                {({ state, setState }) => (
                                                    <Pane>
                                                        <Dialog
                                                            isShown={state.isShown}
                                                            onConfirm={()=>{
                                                                this.UpdateProfile()
                                                                setState({ isShown: false })
                                                            }}
                                                            
                                                            title="Profile Update"
                                                            onCloseComplete={() => setState({ isShown: false })}
                                                            confirmLabel="Update"
                                                        >  <Heading size={400}  width="100%" marginBottom={10} >Name</Heading>
                                                                <FromInput type="text" value={this.state.Name} onChange={(event)=>{
                                                                    this.onChangeName(event.target.value)
                                                                }}
                                                                  placeholder="  Name" name="name" required />
                                                                <Heading size={400} width="100%" marginBottom={10} >Age</Heading>
                                                                <FromInput type="number"  value={this.state.Age} onChange={(event)=>{
                                                                    this.onChangeAge(event.target.value)
                                                                }} placeholder="  Age" name="age" required />

                                                                <Heading size={400} width="100%" marginBottom={10} >Profile image</Heading>                                                                                     

                                                                <FilePicker name="file"
                                                                    multiple
                                                                   
                                                                    onChange={files => this.onChangeImg(files  )}
                                                                    width="100%"
                                                                    accept="image/*"
                                                                    marginBottom={15}
                                                                />

                                                            
                                                        </Dialog>
                                                        <Links onClick={() => setState({ isShown: true })} style={this.state.session.id ? {} : { display: 'none' }}>Update Profile</Links>
                                                    </Pane>
                                                )}
                                            </Component>



                                            <Links style={this.state.session.name == 'Guest' ? { color: 'blue' } : { display: 'none', }}
                                                onClick={() => {
                                                    window.location.href = '/Login'
                                                }} > <b>Login</b></Links>
                                            <Links style={this.state.session.id ? {} : { display: 'none' }} onClick={this.Onlogout.bind(this)} >Logout</Links>
                                        </Divider>
                                    </Verticalmenu>
                                </Sidebar>
                            </Fullheight>
                            <Article>
                                <Container>
                                    <Header>
                                        <HeaderItems>
                                            <Title>

                                                <h1>List Of Book</h1>

                                            </Title>
                                            <Sort>





                                                <Popover
                                                    position={Position.BOTTOM_LEFT}
                                                    content={
                                                        <Menu>
                                                            <Menu.Group>
                                                                <Menu.Item id="Title" value="Title" secondaryText="⌘T" onSelect={() => {
                                                                    this.onSort('title')
                                                                }} icon="font">Sort By Title</Menu.Item>
                                                                <Menu.Item id="fileSize" value={"fileSize"} secondaryText="⌘F" onSelect={(event) => {
                                                                    this.onSort('fileSize')
                                                                }} icon="briefcase">Sort By File Size</Menu.Item>
                                                                <Menu.Item id="fileSize" value={"fileSize"} secondaryText="⌘D" onSelect={(event) => {
                                                                    this.onSort('-downloads')
                                                                }} icon="cloud-download">Sort By Most Downloaded</Menu.Item>
                                                            </Menu.Group>

                                                        </Menu>
                                                    }
                                                >
                                                    <Icon icon="sort-alphabetical" size={20} marginRight={16} />
                                                </Popover>
                                            </Sort>
                                            <Form>


                                                <Autocomplete
                                                    title="Books"
                                                    onSelect={(event) => {
                                                        this.onChangeSearch(event)
                                                    }}
                                                    onKeyUp={(event) => {
                                                        this.onKeyUp(event)
                                                    }}
                                                    items={this.state.titles}
                                                >
                                                    {(props) => {
                                                        const { getInputProps, getRef, inputValue } = props
                                                        return (
                                                            <SearchInput
                                                                placeholder="Search on book"
                                                                value={inputValue}
                                                                innerRef={getRef}
                                                                {...getInputProps()}
                                                            />
                                                        )
                                                    }}
                                                </Autocomplete>

                                            </Form>

                                        </HeaderItems>
                                    </Header>
                                </Container>
                            </Article>

                        </Pusher>

                        <Cards>


                            {
                                this.state.books.map((book, i) => (

                                    <Card className="Card" key={book._id}>

                                        <CardImg >
                                            <BookImg src={'https://books-store-backend2.herokuapp.com/' + book.bookImg} />
                                            <hr />
                                            <DescriptionDiv >
                                                <Heading size={300} marginBottom={10}><b>Book Description</b></Heading>
                                                <Heading size={300} marginBottom={10}>{book.description}</Heading>
                                            </DescriptionDiv>
                                            <hr />
                                            <ToolsDiv>
                                                <InfoDiv>
                                                    <Tooltip

                                                        content={
                                                            <Pane >

                                                                <Heading size={300} marginBottom={10}><b>Book Downloads</b></Heading>
                                                                <Heading size={300} marginBottom={10}>  <Badge color="green" isSolid marginRight={8}> {book.downloads}</Badge></Heading>
                                                                <hr />
                                                                <Heading size={300} marginBottom={10}><b>Book Pages</b></Heading>
                                                                <Heading size={300} marginBottom={10}>  <Badge color="teal" isSolid marginRight={8}>{book.pages}</Badge></Heading>
                                                                <hr />
                                                                <Heading size={300} marginBottom={10}><b>Book Size</b></Heading>
                                                                <Heading size={300} marginBottom={10}>  <Badge color="purple" isSolid marginRight={8}>{book.fileSize}</Badge></Heading>
                                                            </Pane>
                                                        }
                                                        appearance="card"
                                                    >
                                                        <Icon icon="info-sign" size={25} color="info" />
                                                    </Tooltip>
                                                </InfoDiv>
                                                <Icon style={this.state.session.role ? {} : { display: 'none' }} size={25} marginTop={10} icon="trash" color="danger" onClick={() => {
                                                    this.onChangeDelete(book._id)
                                                }} />


                                                <Component initialState={{ isShown: false }}>
                                                    {({ state, setState }) => (
                                                        <Pane>
                                                            <Dialog
                                                                isShown={state.isShown}
                                                                title="Edit this Book"
                                                                onConfirm={this.Editbook.bind(this,book)}
                                                                onCloseComplete={() => setState({ isShown: false })}
                                                                confirmLabel="Edit">
                                                                {/* <form id="myForm" enctype="multipart/form-data" action={`api/book/edit/${book._id}`} method="Post"> */}
                                                                <input type="hidden" name="token"value={ cookies.get('token')}></input>   
                                                                
                                                                                
                                                                <FromInput type="hidden" value={this.state.fileSize} placeholder="  FileSize" name="fileSize" required />
                                                                     
                                                                     
                                                                     
                                                                     <FromInput type="text" id="title" placeholder="  Title" name="title" required />
                                                                     <FromInput type="text" id="author" placeholder="  Author" name="author" required />
                                                                     <FromInput type="number" id="pages" placeholder="  Pages Number" name="pages" required />
                                                                     <FromInput type="date" id="PublishedAt" placeholder="  Published Date" name="PublishedAt" required />
                                                                     <FromTextarea placeholder="  Description" id="description" name="description" required />

                                                                     <Heading size={400} width="100%" marginBottom={10} >Select Category</Heading>
                                                                     <Select onChange={(event)=>{this.categorychange(event.target.value)}}   width="100%" name="category_id"
                                                                         marginBottom={10}>
                                                                         <option checked>Select Category</option>
                                                                         {
                                                                             this.state.categories.map((category, i) => (

                                                                                 <option  key={category._id} value={category._id} >{category.name}</option>
                                                                             ))}

                                                                     </Select>
                                                                     <Heading size={400} width="100%" marginBottom={10} >Book Cover</Heading>
                                                                     <FilePicker name="bookImg"
                                                                       onChange={files => this.onChangeBookCover(files) }
                                                                         multiple
                                                                         width="100%"
                                                                         accept="image/*"
                                                                         marginBottom={15}
                                                                     />
                                                                     <Heading size={400} width="100%" marginBottom={10} > Book File</Heading>


                                                                     <FilePicker name="file"
                                                                         multiple
                                                                         width="100%"
                                                                         placeholder="Description..."
                                                                         marginBottom={32}
                                                                      
                                                                         onChange={files => this.onChangeFile(files)}
                                                                     />

                                                                {/* </form> */}
                                                            </Dialog>
                                                            <Icon icon="edit" color="selected" marginTop={10} size={25} style={this.state.session.role ? {} : { display: 'none' }} onClick={() => setState({ isShown: true })} />

                                                        </Pane>
                                                    )}
                                                </Component>

                                                <Icon marginTop={10} size={25} icon="download" id="content" color="success"

                                                    onClick={this.downloadCounte.bind(this, book)} />


                                            </ToolsDiv>
                                        </CardImg>




                                        <CardContent>
                                            <BookTitle>{book.title}</BookTitle>
                                            <Bookaother>{book.author}</Bookaother>
                                        </CardContent>
                                    </Card>
                                ))}
                        </Cards>
                    </div>
                }}
            </Context.Consumer>
        )
    }
}

export default Books;