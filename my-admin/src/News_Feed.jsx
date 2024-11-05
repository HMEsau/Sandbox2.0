import { Datagrid, DateField, DateInput, List, Show, Edit, Create, SimpleForm, SimpleShowLayout, TextField, TextInput } from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid>
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
        <SimpleForm>
            <TextInput source="content" />
            <TextInput source="created" />
            <DateInput source="date" />
            <TextInput source="id" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);
export const Postshow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="content" />
            <DateField source="created" />
            <DateField source="date" />
            <TextField source="id" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);
export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="content" />
            <TextInput source="created" />
            <DateInput source="date" />
            <TextInput source="id" />
            <DateInput source="updated" />
        </SimpleForm>
    </Create>
);