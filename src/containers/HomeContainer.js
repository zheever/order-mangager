import { connect } from 'react-redux'
import { saveFormData } from '../store/home/action'
import home from '../pages/home/home'

const mapStateToProps = state => {
    return {
      formData: state.formData,
      proData: state.proData
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onInputClick: (value, type) => {
        dispatch(saveFormData(value, type))
      }
    }
  }
  
  const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(home)
  
  export default HomeContainer