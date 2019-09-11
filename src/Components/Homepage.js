import React, { Component } from 'react';

//Data 
import { getProducts } from "../Data/APIs"


// Components
import Navbar from "./Navbar"
import ProductList from './ProductList';


class Homepage extends Component {

    state = {
        allProducts: [],
        tamponSize: "All",
        packSize: "All"
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

    render() {
        return (
            <div>
                <Navbar changeTamponSize={this.changeTamponSize} changePackSize={this.changePackSize} />

                <ProductList allProducts={this.state.allProducts} tamponSize={this.state.tamponSize} packSize={this.state.packSize} />

            </div>
        );
    }
}

export default Homepage;