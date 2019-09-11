import React, { Component } from 'react';

// Local Components

// External Components
import { Card, Image } from 'semantic-ui-react'


class Product extends Component {
    render() {

        const { productImage, price } = this.props.product

        return (
            <Card>
                <Image src={productImage} wrapped ui={false} />

                <Card.Content>
                    <Card.Header>£{price}</Card.Header>
                </Card.Content>

                <Card.Content extra>
                    Click to view details
                </Card.Content>
            </Card>
        );
    }
}

export default Product;
