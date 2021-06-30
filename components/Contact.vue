<template>
  <section class="contact">
    <div class="top-section container">
      <div class="row">
        <div class="col-lg-6">
          <img src="../static/img/Header/Logo.svg" alt="logo">
        </div>
        <div class="col-lg-6">
          <h2>CONTACT US</h2>
          <p> <img src="../static/img/Contact/address.svg" alt=""> 2901 Marmora Road, Glassgow, Seattle, WA 98122-1090</p>
          <a href="mail-to:info@bplay.com"><img src="../static/img/Contact/mail.svg" alt=""> info@bplay.com</a>
        </div>
      </div>
    </div>
    <div class="bottom-section container">
      <div class="row">
        <div class="col-lg-6">
          <ul class="holding-list">
            <li class="holding-item"><img src="../static/img/Contact/license.svg" alt="holding-item"></li>
            <li class="holding-item"><img src="../static/img/Contact/sabs-1.svg" alt="holding-item"></li>
            <li class="holding-item"><img src="../static/img/Contact/curacao-1.svg" alt="holding-item"></li>
            <li class="holding-item"><img src="../static/img/Contact/itech-1.svg" alt="holding-item"></li>
          </ul>
        </div>
        <div class="col-lg-6">
          <p>Copyright © 2020 bplay.com. All rights reserved.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.contact {
  background-image: url("../static/img/Contact/bg.svg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  margin-top: -200px;
  padding-top: 400px;
  padding-bottom: 80px;
}
.contact .top-section h2 {
  margin-bottom: 20px;
}
.contact .bottom-section {
  border-top: 1px solid #424657;
  margin-top: 30px;
  padding-top: 30px;
}
.contact .holding-list {
  display: flex;
  gap: 20px;
}
.contact .holding-item img {
  height: 30px;

}
</style>