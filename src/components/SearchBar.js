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
            <div>
                {/* <input placeholder="search here .." onChange={ this.onInputChange } /> */}
            </div>
        )
    }

    onInputChange(event){
        this.setState({term: event.target.value})
    }

}

export default SearchBar;
