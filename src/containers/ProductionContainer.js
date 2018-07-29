import { connect } from 'react-redux'
import { getProData, togSelectPro, editPro, clearSelected } from '../store/production/action'
import production from '../pages/production/production'

const mapStateToProps = state => {
    return {
      proData: state.proData
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        getProData: async () => {
            let proDataListsAction = await getProData();
            dispatch(proDataListsAction)
        },
        togSelectPro: (index) => {
            dispatch(togSelectPro(index))
        },
        editPro: (index, currentNum) => {
            dispatch(editPro(index, currentNum))
        },
        clearSelected
    }
  }
  
  const ProductionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(production)
  
  export default ProductionContainer