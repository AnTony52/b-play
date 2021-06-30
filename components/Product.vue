<template>
  <section class="product">
    <div class="top-section container">
      <div class="row">
        <div class="col-lg-4">
            <h3 class="subtitle">
              <div>BPLAY</div>
              <div>GAME</div>
            </h3>
            <h2 class="title"> 
              <div><span>OUR</span></div>
              <div><span>PRODUCTS</span></div>
            </h2>
        </div>
        <div class="col-lg-8"><p class="text">BPlay’s high quality iGaming Platform offers a complete solution for your casino. Get the full White Label turnkey solution or the Seamless API with our comprehensive selection of games. Through our global network of premium partners such as Vivo Gaming, SBTech and HoGaming you will have access to the best Live Casino, Sportsbook, Slots, Table Games, Number Games and Fishing Games on the market.</p></div>
      </div>
    </div>
    <div class="bottom-section container">
      <div class="grid-wrapper">
        <div class="item">
          <img src="../static/img/Product/Rectangle 49-8.png" alt="Live Casino" class="item-img">
          <div class="itemtitle">
            <img src="../static/img/Product/Frame.svg" alt="bg-button" class="bg-button">
            <h5>Live Casino</h5>
          </div>
          <div class="desc">Vivo LiveCasino, HoGaming Live Casino, BPlay LiveCasino</div>
        </div>
        <div class="item">
          <img src="../static/img/Product/Rectangle 49-4.png" alt="Live Casino" class="item-img">
          <div class="itemtitle">
            <img src="../static/img/Product/Frame.svg" alt="bg-button" class="bg-button">
            <h5>Live Casino</h5>
          </div>
          <div class="desc">BPlay Fishing 2D, BPlay Fishing 3D</div>
        </div>
        <div class="item">
          <img src="../static/img/Product/Rectangle 49-5.png" alt="Live Casino" class="item-img">
          <div class="itemtitle">
            <img src="../static/img/Product/Frame.svg" alt="bg-button" class="bg-button">
            <h5>Live Casino</h5>
          </div>
          <div class="desc">BTI Sportsbook, BPlay Sportsbook</div>
        </div>
        <div class="item">
          <img src="../static/img/Product/Rectangle 49.png" alt="Live Casino" class="item-img">
          <div class="itemtitle">
            <img src="../static/img/Product/Frame.svg" alt="bg-button" class="bg-button">
            <h5>Live Casino</h5>
          </div>
          <div class="desc">Keno, Number Games, Lottery</div>
        </div>
        <div class="item">
          <img src="../static/img/Product/Rectangle 49-2.png" alt="Live Casino" class="item-img">
          <div class="itemtitle">
            <img src="../static/img/Product/Frame.svg" alt="bg-button" class="bg-button">
            <h5>Live Casino</h5>
          </div>
          <div class="desc">Bplay White Label</div>
        </div>
        <div class="item">
          <img src="../static/img/Product/Rectangle 49-6.png" alt="Live Casino" class="item-img">
          <div class="itemtitle">
            <img src="../static/img/Product/Frame.svg" alt="bg-button" class="bg-button">
            <h5>Live Casino</h5>
          </div>
          <div class="desc">BPlay Slots, Jackpot Slots</div>
        </div>
        <div class="item">
          <img src="../static/img/Product/Rectangle 49-1.png" alt="Live Casino" class="item-img">
          <div class="itemtitle">
            <img src="../static/img/Product/Frame.svg" alt="bg-button" class="bg-button">
            <h5>Live Casino</h5>
          </div>
          <div class="desc">Seamless API</div>
        </div>
        <div class="item">
          <img src="../static/img/Product/Rectangle 49-3.png" alt="Live Casino" class="item-img">
          <div class="itemtitle">
            <img src="../static/img/Product/Frame.svg" alt="bg-button" class="bg-button">
            <h5>Live Casino</h5>
          </div>
          <div class="desc">Full Package</div>
        </div>
        <div class="item">
          <img src="../static/img/Product/Rectangle 49-7.png" alt="Live Casino" class="item-img">
          <div class="itemtitle">
            <img src="../static/img/Product/Frame.svg" alt="bg-button" class="bg-button">
            <h5>Live Casino</h5>
          </div>
          <div class="desc">Table Game</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.animateOnScroll()
  },
  methods: {
    animateOnScroll() {
      this.$gsap.from('.product .item img, .product .text', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        delay: 0.5,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.product .title',
          // // markers: true,
          // pin: true,
          // start: "center center", // when the top of the trigger hits the top of the viewport
          end: "+=50", // end after scrolling 500px beyond the start
          
        }
      })
      this.$gsap.from('.product .title span, .product .subtitle div', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        delay: 0.5,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.product .title',
          // // markers: true,
          // pin: true,
          // start: "center center", // when the top of the trigger hits the top of the viewport
          end: "+=50", // end after scrolling 500px beyond the start
          
        }
      })
    }
  }
}
</script>

<style>
  .product {
    padding: 200px 0;
    background-image: url("../static/img/Product/backgroud-wave.svg"), url("../static/img/Product/bg.png");
    background-repeat: no-repeat;
    background-position: bottom center, 0 0;

  }
  .product .bottom-section {
  }
  .product .grid-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-top: 20px;
  }
  .product .grid-wrapper img{width: 100%;}
  .product .grid-wrapper .itemtitle,
  .product .grid-wrapper .desc {
    text-align: center;
    position: relative;
    width: 80%;
    margin: auto;
  }
  .product .grid-wrapper .itemtitle img{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  .product .grid-wrapper .itemtitle h5{
    position: relative;
    z-index: 5;
    margin: 25px auto;
    padding: 10px;
    }
    @media screen and (max-width: 767px) {
      .product .grid-wrapper {grid-template-columns: 1fr;}
    }
</style>
