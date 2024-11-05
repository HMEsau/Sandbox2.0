import { Admin, Resource } from 'react-admin';
import { PocketBaseProvider } from './ra-pocketbase';
import { PostList, PostEdit, Postshow, PostCreate } from './Posts';


const apiURL = 'https://obscure-space-carnival-pjrgj465jpvxf7947-8090.app.github.dev'

export const dataProvider = PocketBaseProvider(apiURL).dataProvider
export const authProvider = PocketBaseProvider(apiURL).authProvider

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      show={Postshow}
      create={PostCreate} //my create button logs me out after save info?? why
      />
      
    </Admin>
  );
}

export default App
