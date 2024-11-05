import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { PocketBaseProvider } from './ra-pocketbase';

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
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      />

    </Admin>
  );
}

export default App
