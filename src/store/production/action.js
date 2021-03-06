import * as pro from './action-type';
import API from '../../api/api';

// 初始化获取商品数据，保存至redux
export const getProData = async () => {
  try{
    let result = await API.getProduction();
    console.log(result)
    result.map(item => {
      item.selectStatus = true;
      item.selectNum = 0;
      return item;
    })
    return {
      type: pro.GETPRODUCTION,
      dataList: result,
    }
  }catch(err){
    console.error(err);
  }
  // 返回函数，异步dispatch
 /*  return async dispatch => {
    try{
      console.log('getProData' + result)
      let result = await API.getProduction();
      console.log('getProData' + result)
      result.map(item => {
        item.selectStatus = true;
        item.selectNum = 0;
        return item;
      })
      dispatch({
        type: pro.GETPRODUCTION,
        dataList: result,
      })
    }catch(err){
      console.error(err);
    }
  } */
}

// 选择商品
export const togSelectPro = index => {
  return {
    type: pro.TOGGLESELECT,
    index,
  }
}

// 编辑商品
export const editPro = (index, selectNum) => {
  return {
    type: pro.EDITPRODUCTION,
    index,
    selectNum,
  }
}

// 清空选择
export const clearSelected = () => {
  return {
    type: pro.CLEARSELECTED,
  }
}



