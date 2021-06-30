<template>
  <div class="">
    <Header/>
    <Banner/>
    <About/>
    <Product/>
    <Partner/>
    <Client/>
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
  },
  
}
</script>

<style>
.container {
  margin: 0 auto;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}
:root {
  --fs-sm: 13px;
  --fs-md: 24px;
  --fs-lg: 48px;
  --red: #FF3232;
  --bg-primary: #15161E;
}
body {
  background-color: var(--bg-primary);
}
.red {
  color: var(--red);
}
.title div,
.subtitle div {display: inline-block;}
.title, .subtitle {overflow: hidden;}
.title {
  font-size: var(--fs-lg);
  font-weight: bold;
  margin-bottom: 20px;
}

.subtitle, .subtitle *{color: var(--red);}
.subtitle {
  font-size: var(--fs-md);
  font-weight: normal;
  margin-bottom: 0;
}

ul {
  list-style-type: none;  
}
a,a:hover {color: white;text-decoration: none;}
</style>
