![](https://i.imgur.com/8qQTOl2.png)
![](https://i.imgur.com/CUJmIoi.png)
![](https://i.imgur.com/EwH1lxW.png)

---

- mid-project/md/active

[A1]
字首放大

```css
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
```

配合使用

```html
<div class="div2">
  <h1>圖片敘述</h1>
  <p id="FC">
    這是從Twitter上的帳號中蒐集而來的我個人認為比較好笑的9張圖片，Toeic考試時常有一張圖片配上一小段英文來描述圖片，而以上的圖集只是將那些圖片配上一些吐槽的文字敘述用以搞笑。
  </p>
</div>
```

可得以下效果
![](https://i.imgur.com/4zxQWuT.png)

---

- mid-project/md/problem-solving

[P1]### Carousel 合併到 MS CLONE

![](https://i.imgur.com/BDbTBRE.png)
步驟：

- 找到 carousel class
- 找到 class carousel 底下的元素中所使用的 class
- 修改 scss 中 carousel 相關的資料，將 class 整合

---

- mid-project/md/mid-project

HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hero</title>

    <link rel="stylesheet" href="./hero.css" />
  </head>
  <body>
    <div class="slideshow">
      <!-- Slideshow container -->
      <div class="slideshow-container">
        <!-- Full-width images with number and caption text -->
        <div class="mySlides fade">
          <div class="numbertext">1 / 2</div>
          <img
            src="https://cdn.discordapp.com/attachments/861248486555779102/904976189884596274/line_303264301482801.jpg"
            style="width: 100%"
          />
          <div class="text">於秋田教養大學歡迎式上與老師模擬會話</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">2 / 2</div>
          <img
            src="https://cdn.discordapp.com/attachments/861248486555779102/904976155143184394/line_303706803654142.jpg"
            style="width: 100%"
          />
          <div class="text">於秋田教養大學進行課前評量</div>
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
      </div>
    </div>
    <script src="./slideshow.js"></script>
  </body>
</html>
```

SCSS

```scss
* {
  box-sizing: border-box;
}
body {
  background-image: url(http://d20aeo683mqd6t.cloudfront.net/zh-hant/articles/title_images/000/040/984/medium/pixta_40007407_M.jpg?2021);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.slideshow {
  border: 10px solid #d5d6b4;
  margin: 20px auto;
  padding: 20px;
  width: 50%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  background-color: rgba(247, 199, 239, 0.877);

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
        background-color: #ffffff;
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
      background-color: rgba(0, 0, 0, 0.8);
    }
    /* Position the "next button" to the right */
    .next {
      right: 0;
      border-radius: 3px 0 0 3px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
      }
    }
    .prev:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
    /* Caption text */
    .text {
      color: #f2f2f2;
      font-size: 15px;
      padding: 8px 12px;
      position: absolute;
      bottom: 8px;
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
    background-color: #bbb;
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
  }
}
```
