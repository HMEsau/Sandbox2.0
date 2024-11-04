import { Admin, Resource } from 'react-admin';
import './App.css'
import { PocketBaseProvider } from './ra-pocketbase';

const apiURL = 'https://obscure-space-carnival-pjrgj465jpvxf7947-8090.app.github.dev/_/'

export const dataProvider = PocketBaseProvider(apiURL).dataProvider
export const authProvider = PocketBaseProvider(apiURL).authProvider
function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
    >

    </Admin>
  );
}

export default App
