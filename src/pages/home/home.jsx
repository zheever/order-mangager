import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TouchButton from '../../components/touchButton/touchButton';
import PublicHeader from '../../components/header/header';
import { is, fromJS } from 'immutable';
import './home.scss'

class Home extends Component {
  static propTypes = {
  }
  
  state = {

  }

  selectedProList = []

    /**
   * 将表单数据保存至redux，保留状态
   * @param  {string} type  数据类型 orderSum||name||phoneNo
   * @param  {object} event 事件对象
   */
  handleInput = (event) => {
    let value = event.target.value;
    let type = event.target.id;
    switch(type){
      case 'orderSum':
        value = value.replace(/\D/g, '');
        break;
      case 'name':
        break;
      case 'phoneNumber':
        value = value.replace(/\D/g, '');
        break;
      default:;
    }
    if(type && value) {
      this.saveFromData(value, type)
      event.target.value = value 
    }
  }

  /**
   * 保存数据
   * @type {Object}
   */
  saveFromData = (value, type) => {
    this.props.onInputClick(value, type)
    /* let Data = Object.assign(this.state.formData, obj)
    this.props.saveFromData(obj.value, obj.t)
    this.setState({
      formData: Data
    }) */
  }

  submitForm = () => {

  }

  // 初始化数据，获取已选择的商品
  initData = props => {
    this.selectedProList = [];
    props.proData.dataList.forEach(item => {
      if(item.selectStatus && item.selectNum){
        this.selectedProList.push(item);
      }
    })
  }

  componentWillReceiveProps(nextProps){
    console.log('home')
    if(!is(fromJS(this.props.proData), fromJS(nextProps.proData))){
      this.initData(nextProps);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
  }

  componentWillMount(){
    this.initData(this.props);
  }


  render() {
    return (
      <main className='home-container'>
        <PublicHeader title='首页' record />
        <div className='common-title'>请输入信息</div>
        <form onChange={this.handleInput.bind(this)}>
          <div className='home-form-item'>
            <span>销售金额</span>
            <input id='orderSum' className='home-form-input' type='text' placeholder='请输入订单金额' value={this.props.formData.orderNum} />
          </div>
          <div className='home-form-item'>
            <span>客户姓名</span>
            <input id='name' className='home-form-input' type='text' placeholder='请输入客户姓名' value={this.props.formData.orderNum} />
          </div>
          <div className='home-form-item'>
            <span>客户电话</span>
            <input id='phoneNumber' className='home-form-input' maxLength='13' type='text' placeholder='请输入客户电话' value={this.props.formData.orderNum} />
          </div>
          <div className='home-form-item home-form-item-oneline'>
            <div className='item-title'>请选择销售的产品</div>
            <Link to="/production" className="common-select-btn">
            {
              this.selectedProList.length ? <ul className="selected-pro-list">
                {
                  this.selectedProList.map((item, index) => {
                    return <li key={index} className="selected-pro-item ellipsis">{item.product_name}x{item.selectNum}</li>
                  })
                }
              </ul>:<div className='select-productions-text'>选择产品</div>
            }
          </Link>
         </div>
         <TouchButton className='home-form-submit' clickCallBack={this.submitForm} text="提交" />
        </form>
      </main>
    )
  }
}

export default Home