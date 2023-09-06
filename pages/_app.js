import "../styles/globals.css";

import { NavBar, Footer } from "../component/componentsindex"

const MyApp = ({ Component , PageProps}) => (
  <div>
    <NavBar />
    <Component {...PageProps}/>
    <Footer />
  </div>
);

export default MyApp