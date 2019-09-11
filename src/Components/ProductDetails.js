import React, { Component } from 'react';

// External Components
import { Item, Label, Header, Loader } from 'semantic-ui-react'

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
                                        </Item.Content>
                                    </Item>
                                )
                                }
                            </Item.Group>
                        ) : <Loader active inline='centered' />
                }
            </div>
        );
    }
}

export default ProductDetails;