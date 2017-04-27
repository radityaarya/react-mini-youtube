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
            // <div className="search-bar">
            //     <input placeholder="search here .." onChange={ this.onInputChange } />
            // </div>

            <div className="input-group search-bar col-md-10 col-md-offset-10">
                <input onChange={ this.onInputChange } type="text" className="form-control" placeholder="Search for..." />
            </div>
        )
    }

    onInputChange(event){
        this.setState({term: event.target.value})
    }

}

export default SearchBar;
