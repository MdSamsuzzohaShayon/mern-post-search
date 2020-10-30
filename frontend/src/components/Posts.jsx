import React, { Component } from "react";
import { Container, Card, Image, Icon } from "semantic-ui-react";

class Posts extends Component {
    render() {
        return (
            <Container>
                <Card.Group>
                    <Card fluid >

                        <Image size="small" src='https://images.pexels.com/photos/5500958/pexels-photo-5500958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                        <Card.Content
                            header='About Amy'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dicta mollitia cupiditate voluptatum architecto saepe aliquid, ad commodi natus ea."
                        />
                        <Card.Content extra>
                            <Icon name='user' />Category
                        </Card.Content>
                    </Card>
                    <Card fluid >

                        <Image size="small" src='https://images.pexels.com/photos/5500958/pexels-photo-5500958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                        <Card.Content
                            header='About Amy'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dicta mollitia cupiditate voluptatum architecto saepe aliquid, ad commodi natus ea."
                        />
                        <Card.Content extra>
                            <Icon name='user' />Category
                        </Card.Content>
                    </Card>
                    <Card fluid >

                        <Image size="small" src='https://images.pexels.com/photos/5500958/pexels-photo-5500958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                        <Card.Content
                            header='About Amy'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dicta mollitia cupiditate voluptatum architecto saepe aliquid, ad commodi natus ea."
                        />
                        <Card.Content extra>
                            <Icon name='user' />Category
                        </Card.Content>
                    </Card>
                    <Card fluid >

                        <Image size="small" src='https://images.pexels.com/photos/5500958/pexels-photo-5500958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                        <Card.Content
                            header='About Amy'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dicta mollitia cupiditate voluptatum architecto saepe aliquid, ad commodi natus ea."
                        />
                        <Card.Content extra>
                            <Icon name='user' />Category
                        </Card.Content>
                    </Card>

                </Card.Group>
            </Container>

        );
    }
}


export default Posts;