#HTML

```html
<!-- HERO -->
<div class="slideshow" id="hero">
  <!-- Slideshow container -->
  <div class="slideshow-container">
    <!-- Full-width images with number and caption text -->
    <div class="mySlides fade">
      <div class="numbertext">1 / 5</div>
      <img
        src="https://cdn.discordapp.com/attachments/861248486555779102/904976189884596274/line_303264301482801.jpg"
        style="width: 100%"
      />
      <div class="text">於秋田教養大學歡迎式上與老師模擬會話</div>
    </div>

    <div class="mySlides fade">
      <div class="numbertext">2 / 5</div>
      <img
        src="https://cdn.discordapp.com/attachments/861248486555779102/904976155143184394/line_303706803654142.jpg"
        style="width: 100%"
      />
      <div class="text">於秋田教養大學進行課前評量</div>
    </div>

    <div class="mySlides fade">
      <div class="numbertext">3 / 5</div>
      <img
        src="https://cdn.discordapp.com/attachments/861248486555779102/909307443308273674/line_362639859130774.jpg"
        style="width: 100%"
      />
      <div class="text">於秋田教養大學圖書館</div>
    </div>

    <div class="mySlides fade">
      <div class="numbertext">4 / 5</div>
      <img
        src="https://cdn.discordapp.com/attachments/861248486555779102/909307926487892008/line_362791476586341.jpg"
        style="width: 100%"
      />
      <div class="text">於男鹿水族館前合影</div>
    </div>

    <div class="mySlides fade">
      <div class="numbertext">5 / 5</div>
      <img
        src="https://media.discordapp.net/attachments/861248486555779102/904976189020569620/line_303580433075180.jpg"
        style="width: 100%"
      />
      <div class="text">於秋田教養大學堆雪人競賽合影</div>
    </div>

    <!-- Next and previous buttons -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
  </div>
  <br />

  <!-- The dots/circles -->
  <div style="text-align: center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
    <span class="dot" onclick="currentSlide(4)"></span>
    <span class="dot" onclick="currentSlide(5)"></span>
  </div>
</div>
<script src="./slideshow.js"></script>
```

SCSS

```scss
// hero
.slideshow {
  width: 100%;
  margin: 20px auto;
  padding-top: 20px;
  /* Slideshow container */
  .slideshow-container {
    max-width: 1000px;
    position: relative;
    margin: auto;
    /* Hide the images by default */
    .mySlides {
      display: none;

      .text {
        color: black;
        background-color: #e7e5e5;
      }
      /* SHOWCASE */
      .showcase {
        width: 100%;
        height: 30rem;
        background: url('./img/slide1.png') no-repeat center center/cover;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        padding: 5rem;
        font-size: 1.2rem;
        h2 {
          margin-bottom: 1rem;
        }
        p {
          margin-bottom: 1rem;
        }
      }
      /* XBox */
      // .xbox {
      //   width: 100%;
      //   height: 350px;
      //   background: url('./img/xbox.png') no-repeat center center/cover;

      //   .content {
      //     width: 40%;
      //     padding: 2rem 0 0 2rem;

      //     h2 {
      //       font-size: 1.5rem;
      //     }

      //     p {
      //       margin: 1rem 0 1.2rem;
      //       font-size: 0.9rem;
      //     }
      //   }
      // }
      .carousel {
        width: 800px;
        margin: 100px auto;
        background-color: #087f5b;
        /* padding: 32px; */
        /* padding-left: 86px; */
        /* padding-right: 48px; */
        padding: 32px 48px 32px 86px;

        border-radius: 8px;
        position: relative;

        display: flex;
        align-items: center;
        gap: 86px;
        img {
          height: 200px;
          border-radius: 8px;
          transform: scale(1.5);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
        }
        .testimonial-text {
          font-size: 18px;
          font-weight: 500;
          line-height: 1.5;
          margin-bottom: 32px;
          color: #e6fcf5;
        }
        .testimonial-author {
          font-size: 14px;
          margin-bottom: 4px;
          color: #c3fae8;
        }
        .testimonial-job {
          font-size: 12px;
          color: #c3fae8;
        }
      }
    }
    /* Next & previous buttons */
    .prev,
    .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      margin-top: -22px;
      padding: 16px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      user-select: none;
    }
    /* Position the "next button" to the right */
    .next {
      right: 0;
      border-radius: 3px 0 0 3px;
    }
    .prev:hover,
    .next:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    /* Caption text */
    .text {
      color: #f2f2f2;
      font-size: 15px;
      padding: 8px 12px;
      position: absolute;
      bottom: 15px;
      width: 100%;
      text-align: center;
    }

    /* Number text (1/3 etc) */
    .numbertext {
      color: #f2f2f2;
      font-size: 12px;
      padding: 8px 12px;
      position: absolute;
      top: 0;
      .active {
        background-color: #717171;
      }
    }
  }
  /* The dots/bullets/indicators */
  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: rgb(107, 107, 107);
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    &:hover {
      background-color: #717171;
    }
  }
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
    /* Fading animation */
    @-webkit-keyframes fade {
      from {
        opacity: 0.4;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fade {
      from {
        opacity: 0.4;
      }
      to {
        opacity: 1;
      }
    }
    img {
      border-radius: 10px;
    }
  }
}
```
