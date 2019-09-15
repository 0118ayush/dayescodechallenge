import React, { Component } from 'react';

//external components 
import { Item, Label, Header, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"

class CheckoutBasket extends Component {
    render() {
        return (
            <div>
                {
                    (this.props.basket.length > 0) ?
                        (
                            < Item.Group divided>
                                <Header textAlign='center'>Total Balance: £{this.props.basketValue()}</Header>
                                {this.props.basket.map(product =>
                                    <Item>
                                        <Item.Image src={product.productImage} />

                                        <Item.Content>
                                            <Item.Extra>
                                                <Label>Tampon size: {product.tampons.size.charAt().toUpperCase() + product.tampons.size.slice(1)}</Label>
                                            </Item.Extra>
                                            <Item.Extra>
                                                <Label>Coating type: {product.tampons.coating.charAt().toUpperCase() + product.tampons.coating.slice(1)}</Label>
                                            </Item.Extra>
                                            <Item.Extra>
                                                <Label>Pack size: {product.tampons.amount}</Label>
                                            </Item.Extra>
                                            <Item.Extra>
                                                <Label>Price: £{product.price}</Label>
                                            </Item.Extra>
                                            <Item.Extra>
                                                <Button color='red' onClick={() => this.props.removeFromBasket(product)}>Remove item</Button>
                                            </Item.Extra>
                                        </Item.Content>
                                    </Item>
                                )
                                }
                            </Item.Group>
                        ) :
                        <div align="center">
                            <h1>NO PRODUCTS IN BASKET</h1>
                            <Link to="/products">
                                <Button size='small' color="green">Products page</Button>
                            </Link>
                        </div>
                }
            </div>
        );
    }
}

export default CheckoutBasket;