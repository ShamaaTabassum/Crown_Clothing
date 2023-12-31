import {Routes,Route} from 'react-router-dom';
import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import Authentication from './routes/authentication/authentication.component.jsx.jsx'

const App = () => {
 return (
<Routes>
<Route path='/' element={<Navigation/>}>
  <Route path='/' index element={<Home/>}/>
  <Route path='/auth' element={<Authentication/>}/>
</Route>
</Routes>
 )
};

export default App;