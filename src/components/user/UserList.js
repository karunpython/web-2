import React, { Component } from 'react'
import UserDetails from './UserDetails'
import {Route,Link} from 'react-router-dom'


export default class UserList extends Component {
    state = { 
        students: [
           { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
           { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
           { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
           { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
        ],
        isClick:false,
        id:0,
        name:'',
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
                        <th>Age</th>
                        <th>Email</th>
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
        return this.state.students.map((data, index) => {
           const { id, name, age, email } = data //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{email}</td>
                 <td><Link className="btn btn-primary" key={id} to={`/users/${id}`}>View</Link></td>
                 {/* <td><button  data-item={data} onClick={()=>this.handleClick(data)} >View</button></td> */}
              </tr>
           )
        })
     }
}
