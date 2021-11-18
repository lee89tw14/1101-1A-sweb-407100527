# HTML

```html
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
  <table border="2px" style="width: 80%; margin: 80px auto; text-align: center">
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
  <table border="2px" style="width: 80%; margin: 80px auto; text-align: center">
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
```

---

# SCSS

```css
//resume
.resume {
  table {
    background-color: #dbdbdb;
  }
}
```