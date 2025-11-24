import { Component } from "react";

class Searchbar extends Component {
  state = {
    searchTerm: "",
  };
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ searchTerm: value });
    this.props.onSearchChange(value);
  };
  render() {
    return (
      <div className="text-center my-3">
        <input
          type="text"
          placeholder="Cerca qui"
          className="w-50"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Searchbar;
