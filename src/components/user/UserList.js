import React, { Component } from 'react'
import { Route} from 'react-router-dom'


export default class UserList extends Component {
    render() {
        const {match} = this.props
        console.log(match.url)
        return (
            <div className="mt-5 pt-5">
                <h3>hii</h3>
                <Route path={`${match.url}/user1`} render={()=><div >user 1</div>}/>
                <Route path="/users/user2" render={()=><div >user 2</div>}/>
            </div>
        )
    }
}
