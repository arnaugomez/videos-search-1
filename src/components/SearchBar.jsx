import React, {Component} from 'react';


class SearchBar extends Component {
  state = {term: ''};

  render() {
    return (
      <div className="search-bar ui segment" style={{marginTop: "15px"}}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onFormSubmit(this.state.term);
            this.setState({term: ''});
          }}
          className="ui form"
        >
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({term: e.target.value});
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
