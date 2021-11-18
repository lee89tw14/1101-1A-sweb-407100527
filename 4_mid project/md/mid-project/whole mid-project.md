#HTML
[repo](https://github.com/lee89tw14/1101-1A-sweb-407100527)
[vercel](https://1101-1a-sweb-407100527.vercel.app/)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>midproject</title>
  </head>
  <link rel="stylesheet" href="./midproject.css" />

  <body>
    <nav>
      <div>
        <div class="heading">
          <ul>
            <li><a href="#hero">HERO</a></li>
            <li><a href="#resume">RESUME</a></li>
            <li><a href="#photo">PHOTO</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="article">
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
      <!-- 履歷表 -->
      <div class="resume" id="resume">
        <table
          border="2px"
          style="width: 80%; margin: 80px auto; text-align: center"
          id="resume"
        >
          <tr>
            <th style="border-right: none; width: 15%">姓名</th>
            <td style="border-left: none; font-size: 2rem" colspan="2">
              <ruby><rb>李亮誼</rb><rt>りりょうぎ</rt></ruby>
            </td>
            <td style="width: 20%">
              <img
                style="height: 150px"
                src="https://rukkafran.xyz/usr/uploads/2021/11/822595306.png"
                alt=""
              />
            </td>
          </tr>
          <tr style="height: 50px">
            <th style="border-right: none">生年月日</th>
            <td style="border-left: none">2000年08月14日生 滿21歲</td>
            <th style="border-right: none">性別</th>
            <td style="border-left: none">男</td>
          </tr>
          <tr style="height: 50px">
            <th style="border-right: none" rowspan="1">email</th>
            <td style="border-left: none">407100527@gms.tku.edu.tw</td>
            <th style="border-right: none">電話</th>
            <td style="border-left: none">88698826xxxx</td>
          </tr>
        </table>
        <table
          border="2px"
          style="width: 80%; margin: 80px auto; text-align: center"
        >
          <tr>
            <th style="width: 10%">年</th>
            <th style="width: 10%">月</th>
            <th colspan="3">學・經歷</th>
          </tr>
          <th></th>
          <th></th>
          <th colspan="3">學歷</th>
          <tr>
            <td>2015</td>
            <td>9</td>
            <td colspan="3">國立斗六高級中學　　入學</td>
          </tr>
          <tr>
            <td>2018</td>
            <td>6</td>
            <td colspan="3">國立斗六高級中學　　畢業</td>
          </tr>
          <tr>
            <td>2018</td>
            <td>9</td>
            <td colspan="3">私立淡江大學日本語文學科　　入學</td>
          </tr>
          <tr>
            <td>2022</td>
            <td>6</td>
            <td colspan="3">
              私立淡江大學學校財團法人淡江大學日本語文學科　　預計畢業
            </td>
          </tr>
          <th></th>
          <th></th>
          <th colspan="3">職歷</th>
          <tr>
            <td>2019</td>
            <td>9</td>
            <td colspan="3">淡江大學資訊處電腦維修服務隊　　入職至今</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td colspan="3" style="text-align: right">以上</td>
          </tr>
        </table>
        <table
          border="2px"
          style="width: 80%; margin: 80px auto; text-align: center"
        >
          <tr>
            <th style="width: 10%">年</th>
            <th style="width: 10%">月</th>
            <th colspan="3">免許・資格</th>
          </tr>
          <tr>
            <td>2018</td>
            <td>8</td>
            <td>普通重型機車駕照　　取得</td>
          </tr>
          <tr>
            <td>2019</td>
            <td>6</td>
            <td>華語・英語導遊領隊資格考試　　合格</td>
          </tr>
          <tr>
            <td>2019</td>
            <td>8</td>
            <td>普通自小客車駕照(手排)　　取得</td>
          </tr>
          <tr>
            <td>2021</td>
            <td>2</td>
            <td>日本語能力試驗N2　　合格</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td colspan="3" style="text-align: right">以上</td>
          </tr>
        </table>
      </div>
      <!-- photo -->
      <div class="photo" id="photo">
        <div class="line3">
          <img
            src="https://cdn.discordapp.com/attachments/861248486555779102/904976154300121128/line_303760595402716.jpg"
            alt=""
          />
          <img
            src="https://cdn.discordapp.com/attachments/861248486555779102/904976154807656468/line_303743043236056.jpg"
            alt=""
          />
          <img
            src="https://cdn.discordapp.com/attachments/861248486555779102/904976155143184394/line_303706803654142.jpg"
            alt=""
          />
          <img
            src="https://cdn.discordapp.com/attachments/861248486555779102/904976155420000266/line_303686041817067.jpg"
            alt=""
          />
          <img
            src="https://cdn.discordapp.com/attachments/861248486555779102/904976155688448020/line_303673431103895.jpg"
            alt=""
          />
          <img
            src="https://cdn.discordapp.com/attachments/861248486555779102/904976189884596274/line_303264301482801.jpg"
            alt=""
          />
        </div>
        <div class="div2">
          <h1>圖片敘述</h1>
          <p id="FC">
            2020年1月，拍攝於日本秋田教養大學，當時隨日文系與教養大學共同舉辦的日文寒假研修program前往。以上六張圖片為當時上課紀錄以及歡迎式。
          </p>
        </div>
        <div class="line3">
          <img
            src="https://cdn.discordapp.com/attachments/861248486555779102/909307926487892008/line_362791476586341.jpg"
            alt=""
          />
          <img
            src="https://cdn.discordapp.com/attachments/861248486555779102/904976189645545472/line_303312304635543.jpg"
            alt=""
          />
          <img
            src="https://cdn.discordapp.com/attachments/861248486555779102/904976189360316426/line_303419067717742.jpg"
            alt=""
          />
          <img
            src="https://cdn.discordapp.com/attachments/861248486555779102/909307443308273674/line_362639859130774.jpg"
            alt=""
          />
          <img
            src="https://cdn.discordapp.com/attachments/861248486555779102/909307443937443840/line_362675769795292.jpg"
            alt=""
          />
          <img
            src="https://cdn.discordapp.com/attachments/861248486555779102/909307443622854696/line_362656095748424.jpg"
            alt=""
          />
        </div>
        <div class="div2">
          <h1>圖片敘述</h1>
          <p id="FC">
            2020年1月，拍攝於日本秋田/男鹿/入道崎，當時隨日文系與教養大學共同舉辦的日文寒假研修program前往。以上六張圖片為紀錄當時假日時出遊的狀況。
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
```

---

#SCSS

```scss
* {
  box-sizing: border-box;
  border-collapse: collapse;
}
body {
  background-image: url(http://d20aeo683mqd6t.cloudfront.net/zh-hant/articles/title_images/000/040/984/medium/pixta_40007407_M.jpg?2021),
    linear-gradient(rgb(255, 255, 255), rgb(228, 183, 228));
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  width: 90%;
  margin: auto;
  padding-bottom: 30px;
  padding-top: 30px;
}
// nav for midproject
.heading {
  width: 100%;
  margin: auto;
  height: 50px;
  background-color: rgb(189, 189, 189);
  border-radius: 5px;
  border: solid gray;
  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    padding-right: 12px;
    line-height: 0px;
  }
  ul li {
    padding: 10px;
  }
  ul li a {
    text-decoration: none;
    padding: 5px;
  }
  ul li a:hover {
    color: azure;
    background: darkolivegreen;
  }
}
.article {
  width: 100%;
  margin: auto;
  background-color: #afc2d4;
  border-left: 20px #afc2d4 solid;
  border-right: 20px #afc2d4 solid;
  border-radius: 20px;
}
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
//resume
.resume {
  table {
    background-color: #dbdbdb;
  }
}
// photogallery
.photo {
  width: 100%;
  margin: auto;
  padding: 15px;

  .line3 img {
    width: 31%;
    margin: 1%;
    border: 3px solid #000;
    vertical-align: middle;
  }
  .div2 h1 {
    font-size: 1.4rem;
    font-weight: bold;
    color: rgb(32, 56, 54);
    padding-bottom: 1.3rem;
  }
  .div2 p {
    border-left: 5px solid #e446af;
    padding-left: 0.5rem;
    line-height: 200%; /*表示段落其他小字要放大的行高*/
    text-align: justify;
    font-size: 1.2rem;
  }
  #FC:first-letter {
    font-size: 200%; /*表示首字要放大的比率大小*/

    color: rgb(61, 61, 92);

    font-weight: bold; /*首字粗體*/
    float: none;
    padding-right: 3px;
    /*首字與右邊的距離*/
    line-height: 100%; /*表示首字放大的行高*/
  }
}
```
