import React, { Component } from 'react';

// External Components
import { Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom"


class Product extends Component {
    render() {


        const { productImage, price } = this.props.product

        return (
            <Link to={`/products/${this.props.product.id}`} >
                <Card>
                    <Image src={productImage} wrapped ui={false} />

                    <Card.Content>
                        <Card.Header>£{price}</Card.Header>
                    </Card.Content>

                    <Card.Content extra>
                        Click to view details
                    </Card.Content>
                </Card>
            </Link>
        );
    }
}

export default Product;
