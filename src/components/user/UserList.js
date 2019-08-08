import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class UserList extends Component {
    state = { 
        users: [],
        isClick:false,
        id:0,
        name:'',
     }

     componentDidMount(){
         axios.get('http://localhost:5000/')
              .then(res=>{
                  this.setState({users:res.data.result})
              })
     }

     handleClick=(data)=>{
          this.setState({
            isClick:true,
            data:data
          })
     }

    render() {

        if (this.state.isClick){
           return   <div></div>

       }
        // return <Redirect to={{pathname:'/404'}}/> 
    
    return (
            <div className="container mt-5 pt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>View</th>
                    </tr>
                </thead>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>

                {/* <h3>hii</h3>
                const {match} = this.props
                <Route path={`${match.url}/user1`} render={()=><div >user 1</div>}/>
                <Route path="/users/user2" render={()=><div >user 2</div>}/> */}
            </div>
        )
    }


    renderTableData() {
        return this.state.users.map(data => {
           const { uid, name, mobile, email,message } = data //destructuring
           return (
              <tr key={uid}>
                 <td>{uid}</td>
                 <td>{name}</td>
                 <td>{mobile}</td>
                 <td>{email}</td>
                 <td>{message}</td>
                 <td><Link className="btn btn-primary" key={uid} to={`/users/${uid}`}>View</Link></td>
                 {/* <td><button  data-item={data} onClick={()=>this.handleClick(data)} >View</button></td> */}
              </tr>
           )
        })
     }
}
