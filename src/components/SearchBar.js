import React,{ Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        return(
            <div className="input-group search-bar col-md-10 col-md-offset-10">
                <input
                    value={this.state.term}
                    onChange={ event => this.onInputChange(event.target.value) }
                    type="text" className="form-control" placeholder="Search for..." />
            </div>
        )
    }

    onInputChange(term){
        this.setState({term})
        this.props.onSearchVideo(term)
    }

}

export default SearchBar;
