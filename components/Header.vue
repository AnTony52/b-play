<template>
  <section class="header">
    <header class="container">
      <nuxt-link to="/" class="logo">
        <img src="../static/img/Header/Logo.svg" alt="LOGO">
      </nuxt-link>
      <div class="desktop-navigation">
        <ul class="menu-navigation">
          <li>
            <nuxt-link to="/">ABOUT US</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">PRODUCTS</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">PARTNERS</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">OUR CLIENTS</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">CONTACT US</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="right-side">
        <ul class="lang-navigation">
          <li class="current"><img src="../static/img/Header/flag.svg" alt="flag"><span>ENG</span><img src="../static/img/Header/arrow-down.svg" alt="arrow-down"></li>
        </ul>
        <div class="hamburger">
          <img src="../static/img/Header/hamburger.svg" alt="hamburger">
        </div>
      </div>
    </header>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$gsap.from("header", { opacity: 0, duration: 1, delay: 0.5, ease: 'Power1.easeInOut', })
  }
}
</script>

<style scoped>
  ul {margin: 0;}
  section.header {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px 0;
  }
  header .logo {
    width: 120px;
  }
  header .logo img {
    width: 100%;
  }
  header .desktop-navigation {
    width: 60%;
  }
  header ul.menu-navigation {
    display: flex;
    justify-content: space-between;
  }
  header ul.menu-navigation li{position: relative;padding-bottom: 7px;}
  header ul.menu-navigation li::before,
  header ul.menu-navigation li::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    height: 1px;
    background-color: #F41616;
  }
  header ul.menu-navigation li::before {
    left: 0;
  }
  header ul.menu-navigation li:hover::before {
    width: 100%;
    -webkit-transition: width .3s;
    transition: width .3s;
  }
  header ul.menu-navigation li::after {
    right: 0;
    -webkit-transition: width .3s;
    transition: width .3s;
  }
  header ul.menu-navigation li:hover::after {
    width: 100%;
    background: transparent;
  }
  .lang-navigation {
    border: 1px solid #fff;
    border-radius: 20px;
    padding: 10px;
  }
  .lang-navigation span {
    display: inline-block;
    margin: 0 7px;
  }
  .hamburger {
    display: none;
  }
  @media screen and (max-width: 767px) {
    .desktop-navigation {display: none;}
    header .right-side {
      display: flex;
      align-items: center;
    }
    .hamburger {display: block;margin-left: 20px;cursor: pointer;;}
  }
</style>
