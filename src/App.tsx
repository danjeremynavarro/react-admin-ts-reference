/**
 * React Admin sample
 * Resource prop.name is an endpoint.
 * 
 * Use *Guesser to see auto-generated code when prototyping
 */
import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from "./Users";
import {PostList} from "./Posts";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
        <Admin dataProvider={dataProvider}>
            <Resource name="posts" list={PostList} edit={EditGuesser}/>
            <Resource name="users" list={UserList} />
        </Admin>
    );

export default App;
