// NPM import
import { connect } from 'react-redux';

// locals imports
import SearchBar from 'src/components/SearchBar';

// Action creators import
import { changeInput } from 'src/store/reducer';

const mapStateToProps = state => ({
  loading: state.loading,
  searchInputValue: state.searchInputValue,
});



const mapDispatchToProps = (dispatch) => {
  return {
    onChangeInput: (inputValue) => {
      dispatch(changeInput(inputValue));
    },
  };
};

// connect
const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);

// export
export default SearchBarContainer;
