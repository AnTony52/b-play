<template>
  <div class="total-container">
    <Header/>
    <Banner/>
    <About/>
    <Product/>
    <Client/>
    <Partner/>
    <Contact/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Product from "../components/Product";
import Client from "../components/Client";
import Partner from "../components/Partners";
import Contact from "../components/Contact";
export default {
  components: {
    Header,
    Banner,
    About,
    Product,
    Client,
    Partner,
    Contact
  }
}
</script>

<style>
*{color: white;mix-blend-mode: difference;}
.total-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
