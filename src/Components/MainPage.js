import React, { Component } from 'react';

//Data 
import { getProducts } from "../Data/APIs"

// External components
import { Route, withRouter, Switch } from "react-router-dom"

// Components
import Navbar from "./Navbar"
import ProductList from './ProductList';
import ProductDetails from "./ProductDetails"
import Homepage from "./HomePage"
import ErrorPage from './ErrorPage';


class MainPage extends Component {

    state = {
        allProducts: [],
        tamponSize: "All",
        packSize: "All",
        sortBy: "Default"
    }

    componentDidMount() {
        this.getProductsToState()
    }

    addIdToEachProduct = (products) => {
        return products.map(product => ({ id: products.indexOf(product), ...product }))
    }

    getProductsToState = () => {
        getProducts()
            .then(products => this.addIdToEachProduct(products))
            .then(products => this.setState({
                allProducts: products
            }))
    }

    changeTamponSize = (event) => {
        this.setState({
            tamponSize: event.target.innerText
        })
    }

    changePackSize = (event) => {
        this.setState({
            packSize: event.target.innerText
        })
    }

    changeSortBy = (event) => {
        this.setState({
            sortBy: event.target.innerText
        })
    }

    render() {

        return (
            <div>
                <Navbar changeTamponSize={this.changeTamponSize} changePackSize={this.changePackSize} changeSortBy={this.changeSortBy} />

                <Switch>
                    <Route exact path="/products/:id" render={(props) => {
                        let product = this.state.allProducts.find(product => product.id === parseInt(props.match.params.id, 10))
                        return <ProductDetails product={product} />

                    }} />
                    <Route exact path="/products" render={() => <ProductList allProducts={this.state.allProducts} tamponSize={this.state.tamponSize} packSize={this.state.packSize} sortBy={this.state.sortBy} />} />
                    <Route exact path="/" render={() => <Homepage />} />
                    <Route render={() => <ErrorPage />} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(MainPage);