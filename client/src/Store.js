import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

class Provider extends Component {

	state = {
		categories: null,
	}

	componentDidMount(){
		axios.get('/api/categories')
		.then(result => this.setState({categories: result.data}))
		.catch(err =>  console.log(err));
	}

	render() {
		return (
			<Context.Provider
				value={{
					state: this.state,
					updateCategories: () => {
						axios.get('/api/categories')
						.then(res => this.setState({categories: res.data}))
						.catch(err =>  console.log(err));
					},
					updateCategory: (id) => {
						axios.put(`api/${id}`)
						.then(res => console.log(res.data))
						.catch(err => console.log(err));
					}
				}}>
				{this.props.children}	
			</Context.Provider>
		);
	}
}

export { Provider, Context };
