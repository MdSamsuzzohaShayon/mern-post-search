import React, { Component } from 'react';
import SideMenu from "./SideMenu";
import AddCategory from "./AddCategory";
import CategoryList from "./CategoryList";
import PostList from "./PostList";
import AddPost from "./AddPost";
import { Grid, GridRow, GridColumn } from "semantic-ui-react";





class AdminPanel extends Component {
    state = { activeItem: 'inbox' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render() {

        return (
            <Grid >
                <GridRow>
                    <GridColumn width={3}>
                        <SideMenu />
                    </GridColumn>
                    {/* <GridColumn width={13} >
                        <br />
                        <br />
                        <br />
                        <br />
                        <AddCategory />
                        <br />
                        <br />
                        <br />
                        <CategoryList />
                    </GridColumn> */}



                    {/* <GridColumn width={13} >
                        <br />
                        <br />
                        <br />
                        <PostList />
                    </GridColumn> */}

                    {/* <GridColumn width={13} >
                        <br />
                        <br />
                        <br />
                        <AddPost />
                    </GridColumn> */}
                </GridRow>
            </Grid>

        )
    }
}

export default AdminPanel;
