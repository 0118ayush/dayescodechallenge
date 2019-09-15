import React, { Component } from 'react';

// External Components
import { Item, Label, Header, Loader, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"

class ProductDetails extends Component {
    render() {



        return (
            <div>
                {
                    (this.props.product) ?
                        (
                            < Item.Group divided>
                                <Header textAlign='center'>Price: £{this.props.product.price}</Header>
                                {this.props.product.tampons.map(tampon =>
                                    <Item>
                                        <Item.Image src={this.props.product.productImage} />

                                        <Item.Content>
                                            <Item.Extra>
                                                <Label>Tampon size: {tampon.size.charAt().toUpperCase() + tampon.size.slice(1)}</Label>
                                            </Item.Extra>
                                            <Item.Extra>
                                                <Label>Coating type: {tampon.coating.charAt().toUpperCase() + tampon.coating.slice(1)}</Label>
                                            </Item.Extra>
                                            <Item.Extra>
                                                <Label>Pack size: {tampon.amount}</Label>
                                            </Item.Extra>
                                            <Item.Extra>
                                                <Button color='olive' onClick={() => this.props.addToBasket(this.props.product, tampon)}>Add to basket</Button>
                                            </Item.Extra>
                                        </Item.Content>
                                    </Item>
                                )
                                }
                                <br />
                                <Link to="/products">
                                    <Button size='small' color="green">Back</Button>
                                </Link>
                            </Item.Group>
                        ) : <Loader active inline='centered' />
                }
            </div>
        );
    }
}

export default ProductDetails;