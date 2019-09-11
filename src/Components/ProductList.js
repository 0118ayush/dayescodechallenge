import React, { Component } from 'react';

// Components 
import Product from "./Product"

// External Components
import { Loader, Card } from 'semantic-ui-react'


class ProductList extends Component {

    // think about changing .every to .some
    filterTamponSize = () => {
        if (this.props.tamponSize === "Small") {
            return this.props.allProducts.filter(product => product.tampons.every(tampon => tampon.size === "small"))
        }
        if (this.props.tamponSize === "Regular") {
            return this.props.allProducts.filter(product => product.tampons.every(tampon => tampon.size === "regular"))
        }
        if (this.props.tamponSize === "Large") {
            return this.props.allProducts.filter(product => product.tampons.every(tampon => tampon.size === "large"))
        }
        if (this.props.tamponSize === "All") {
            return this.props.allProducts
        }
    }

    filterPackSize = (products) => {
        if (this.props.packSize === "1 - 5") {
            return products.filter(product => product.tampons.some(tampon => tampon.amount >= 1 && tampon.amount <= 5))
        }
        if (this.props.packSize === "6 - 10") {
            return products.filter(product => product.tampons.some(tampon => tampon.amount >= 6 && tampon.amount <= 10))
        }
        if (this.props.packSize === "All") {
            return products
        }
    }


    render() {
        return (
            <div>
                {
                    this.props.allProducts && this.props.tamponSize && this.props.packSize ?
                        <Card.Group itemsPerRow={4}>
                            {
                                this.filterPackSize(this.filterTamponSize()).map(product => <Card><Product product={product} /></Card>)
                            }
                        </Card.Group>
                        : <Loader active inline='centered' />
                }
            </div>
        );
    }
}

export default ProductList;