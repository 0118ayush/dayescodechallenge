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
import CheckoutBasket from './CheckoutBasket';


class MainPage extends Component {

    state = {
        allProducts: [],
        tamponSize: "All",
        packSize: "All",
        sortBy: "Default",
        checkoutBasket: []
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

    addToBasket = (product, tampon) => {
        let chosenProd = { ...product, tampons: tampon }

        this.setState({
            checkoutBasket: [chosenProd, ...this.state.checkoutBasket]
        })
    }

    removeFromBasket = (removedProduct) => {
        let remainingBasket = this.state.checkoutBasket.filter(product => product !== removedProduct)

        this.setState({
            checkoutBasket: remainingBasket
        })
    }

    basketValue = () => {
        let pricesArray = []
        this.state.checkoutBasket.map(product => pricesArray.push(product.price))

        let basketPrice = pricesArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0)

        return basketPrice
    }

    render() {
        return (
            <div>
                <Navbar changeTamponSize={this.changeTamponSize} changePackSize={this.changePackSize} changeSortBy={this.changeSortBy} basket={this.state.checkoutBasket} />

                <Switch>
                    <Route path="/products/:id" render={(props) => {
                        let product = this.state.allProducts.find(product => product.id === parseInt(props.match.params.id, 10))
                        return <ProductDetails product={product} addToBasket={this.addToBasket} />
                    }} />

                    <Route path="/products" render={() => <ProductList allProducts={this.state.allProducts} tamponSize={this.state.tamponSize} packSize={this.state.packSize} sortBy={this.state.sortBy} />} />

                    <Route path="/checkout" render={() => <CheckoutBasket basket={this.state.checkoutBasket} removeFromBasket={this.removeFromBasket} basketValue={this.basketValue} />} />

                    <Route exact path="/" render={() => <Homepage />} />

                    <Route render={() => <ErrorPage />} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(MainPage);