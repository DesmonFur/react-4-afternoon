import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import  History from '../History/History'
import Contact from '../Contact/Contact'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to='/about' className='subnav_links'>
            <h3>About</h3>
          </Link>
          <Link to='/about/history' className='subnav_links'>
            <h3>History</h3>
          </Link>
          <Link to='/about/contact' className='subnav_links'>
            <h3>Contact</h3>
          </Link>
        </div>
        <div className='box'>
          <Switch>
            <Route component={History} path='/about/history' />
            <Route component={Contact} path='/about/contact' />
            <Route
              path="/about"
              render={() => (
                <div>
                  <h1>About the University</h1>
                  <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique natus hic? Perferendis est, fugit enim laudantium repellendus et sit laboriosam, impedit cum corporis vel excepturi sequi quaerat, praesentium suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, perferendis quidem qui molestias pariatur sed laudantium impedit exercitationem, obcaecati ab ipsam odit nemo cum adipisci eaque dolore unde ipsum! Ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab itaque nesciunt sed, veniam et laborum odio quibusdam harum minima nobis aut consequatur? Voluptatibus, dolore perspiciatis. Iste sapiente earum quibusdam.
                  </p>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    )
  }
}