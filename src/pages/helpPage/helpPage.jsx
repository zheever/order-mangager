import React, { Component } from 'react';
import Header from '../../components/header/header';
import './helpPage.scss';

class Production extends Component{

  render(){
    return (
      <main>
        <Header title='帮助' confirm />
        <section className="help-text-container">
            <div className='help-text'>
                <p>介绍本项目主要用于学习 react + redux 之间的配合方式,scss的使用，rem和flex的自适应实现</p>
            </div>
            <div className='dependencies'>
                <p>"axios": "^0.18.0",</p>
                <p>"immutable": "^3.8.2",</p>
                <p>"react": "^16.4.1",</p>
                <p>"react-addons-css-transition-group": "^15.6.2",</p>
                <p>"react-dom": "^16.4.1",</p>
                <p>"react-hot-loader": "^4.3.3",</p>
                <p>"react-redux": "^5.0.7",</p>
                <p>"react-router-dom": "^4.3.1",</p>
                <p>"react-scripts": "1.1.4",</p>
                <p>"redux": "^4.0.0",</p>
                <p>"redux-thunk": "^2.3.0"</p>
                <p>"node-sass": "^4.9.2",</p>
            </div>
        </section>
      </main>
    )
  }
}

export default Production