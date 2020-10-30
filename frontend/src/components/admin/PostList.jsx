import React, { Component } from 'react'
import { Header, List, Button, Image, Icon } from "semantic-ui-react";


class PostList extends Component {
    render() {
        return (
            <div>
                <Header as="h2">Post List</Header>
                <br /><br />
                <List divided verticalAlign='middle'>
                    <List.Item>
                        <List.Content floated='right'>
                            <Button color="red"> <Icon name="delete" /> Delete</Button>
                        </List.Content>
                        <Image avatar src='/images/avatar/small/lena.png' />
                        <List.Content>Lena</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='right'>
                            <Button color="red"> <Icon name="delete" /> Delete</Button>
                        </List.Content>
                        <Image avatar src='/images/avatar/small/lindsay.png' />
                        <List.Content>Lindsay</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='right'>
                            <Button color="red"> <Icon name="delete" /> Delete</Button>
                        </List.Content>
                        <Image avatar src='/images/avatar/small/mark.png' />
                        <List.Content>Mark</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='right'>
                            <Button color="red"> <Icon name="delete" /> Delete</Button>
                        </List.Content>
                        <Image avatar src='/images/avatar/small/molly.png' />
                        <List.Content>Molly</List.Content>
                    </List.Item>
                </List>
            </div>
        )
    }
}

export default PostList;
