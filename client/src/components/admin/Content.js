import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Categories from './Categories';
import Products from './Products';

const Content = ({categories, updateCategories}) => {
	return (
		<div>
			<Route exact path="/admin" component={ Dashboard } />
			<Route
			 path="/admin/categories"
			 render={() => <Categories
			 			categories={categories}
			 			updateCategories={updateCategories}/> 
			 }/>
			<Route path="/admin/products" component={ Products } />
		</div>
	)
}

export default Content