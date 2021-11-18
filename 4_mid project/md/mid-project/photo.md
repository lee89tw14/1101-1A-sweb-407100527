# HTML

```html
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
```

---

# SCSS

```css
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
