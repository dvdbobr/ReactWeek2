//import ChuckNorris from "./w2day1/Components/ChuckNorris";
//import DataMassage from "./w2day1/Components/dataMassage/DataMassage";
// import Avatars from "./w2day1/Components/avatars/Avatars";
// import './w2day1/Components/avatars/avatarCss/avatar.css'
// import Focus from "./w2day2/Components/ex14.1/Focus";
// import Copy from "./w2day2/Components/ex14.2/Copy";
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './w2day4/router/Components/Header'
import Homepage from './w2day4/router/Components/Homepage'
import ProductDetail from './w2day4/router/Components/ProductDetail'
import Products from './w2day4/router/Components/Products'
import './w2day4/router/CSS/header.css'
import './w2day4/router/CSS/homepage.css'
import './w2day4/router/CSS/products.css'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component={Homepage} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={ProductDetail} />
      </div>
    </BrowserRouter>
  )
}

export default App;
