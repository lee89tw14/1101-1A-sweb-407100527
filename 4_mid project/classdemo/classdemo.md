[vercel](https://1101-1a-sweb-407100527.vercel.app/)

# html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>classdemo</title>
  </head>
  <link rel="stylesheet" href="./classdemo.css" />
  <style>
    * {
      margin: 0;
      padding: 5px;
      box-sizing: border-box;
    }
    .show-classdemo {
      width: 100%;
      height: 100vh;
      background-color: #afc2d4;
      border-radius: 20px;
    }
  </style>
  <body>
    <nav>
      <div>
        <div class="heading">
          <ul>
            <li onclick="change(4)"><a href="#">INTRO</a></li>
            <li onclick="change(5)"><a href="#">POKEMON</a></li>
            <li onclick="change(6)"><a href="#">BLOG</a></li>
            <li onclick="change(7)"><a href="#">ImgGallery</a></li>
            <li onclick="change(8)"><a href="#">MS CLONE</a></li>
            <li onclick="change(9)"><a href="#">JS SCRIPT</a></li>
          </ul>
        </div>
      </div>
      <script src="./script.js"></script>
    </nav>
    <section class="show-classdemo"></section>
  </body>
</html>
```

---

# css

```css
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
// nav for classdemo
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
    padding-right: 8px 12px;
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
```
