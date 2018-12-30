
import React from 'react'

import Context from './Context'
import { BrowserRouter, Route  , NavLink,
  HashRouter} from 'react-router-dom'
import Registration from'../src/Registration';
import Login from'../src/login';
import Books from'../src/Books';
import Home from './Home';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        users:[],
        session:[],

    }
}


  // componentDidMount() {
  //   fetch(`api/user`)
  //     .then((response) => {
  //       console.log(response)
  //       return response.json()
        
  //     })
  //     .then((data) => {

  //       ///this process use to filter from api and add only useful data to our arry news
  //       this.setState({
  //           users: data


  //       })
  //       console.log(data)
  //     })
      
  // }
  

  
 
  render() {
    return (
      <Context.Provider value={{
        state: this.state,
        actions: {
          //this function use to set  sessionInfo 
          sessionInfo: (value) => {
            this.setState({
              session: value
            })
            
            console.log(this.state.session)
          },
          //this function use to set  Age value 
          onChangePatientAge: (value) => {
            this.setState({
              Patient_Age: value
            })
          },
           //this function use to set  Medication Name value 
          onChangeMedicationName: (selected) => {
            this.setState({
              Medication_Name: selected
            })
          },
          //this function use to set  Patient name value 
          onChangePatientName: (value) => {
            this.setState({
              Patient_name: value
            })
          },
        }
      }}>


       <BrowserRouter>
      <div>
      <Route exact  path="/register" component ={Registration}/>
    <Route exact  path="/Login" component ={Login}/>
    <Route exact  path="/books" component ={Books}/>
    <Route exact   path="/" component ={Home}/>
      
    

 </div>
        </BrowserRouter>
      </Context.Provider>
      
      
    )
  }
}







export default App;
