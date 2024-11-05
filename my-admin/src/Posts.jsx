import { Datagrid, DateField, List, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid>
            <TextField source="collectionName" />
            <TextField source="content" />
            <DateField source="created" />
            <DateField source="date" />
            <TextField source="id" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);
export const PostEdit = () => (
    <Edit>
        <Datagrid>
            <TextField source="collectionName" />
            <TextField source="content" />
            <DateField source="created" />
            <DateField source="date" />
            <TextField source="id" />
            <DateField source="updated" />
        </Datagrid>
    </Edit>
);
export const Postshow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="collectionName" />
            <TextField source="content" />
            <DateField source="created" />
            <DateField source="date" />
            <TextField source="id" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);