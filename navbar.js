import { Link } from 'react-router-dom'
import sk from './pages/sk.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar(){
    return(
        <>
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container">

    <img src={sk} alt="Logo" class="rounded-pill navbar-brand img-fluid" style={{width:'150px'}}  />

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse   li1" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item ps-5">
          <Link className="nav-link text-white" to="/">Home</Link>
        </li>
        <li class="nav-item ps-5">
          <Link className="nav-link text-white" to="/about">About</Link>
        </li>
        <li class="nav-item ps-5">
          <Link className="nav-link text-white" to="/product">Product</Link>
        </li>
        <li class="nav-item ps-5">
          <Link className="nav-link text-white" to="/specification">Specification</Link>
        </li>
        <li class="nav-item ps-5">
          <Link className="nav-link text-white" to="/colourrange">Colour range</Link>
        </li>
        <li class="nav-item ps-5">
          <Link className="nav-link text-white" to="/contactus">Contact us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}