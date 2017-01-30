# AWB Menu

##Description

This repository contain some menu templates that you can use in your web.
it is based pure css, js, and supported with jquery.


##Usage:
you have to add this menu requirement in your html script like usual.
   * Don't worry just 2 requirement:
      * [Jquery](https://jquery.com/)
      * [Font Awesome](http://fontawesome.io/icons/)

```html
<link rel="stylesheet" href="your-folder/awb-menu/css/horizontal-btm.css" />
<link rel="stylesheet" href="your-folder/awb-menu/font-awesome/css/font-awesome.min.css" />
<script src="your-folder/awb-menu/js/jquery-3.1.1.min.js"></script> Jquery
```

make your menu with `<ul>` html tag like usual. But don't forget to add some id and class.

  * the `<ul>` tag must have `id="awb-item-container"` and give it class same as the css
  * in this code I'm using `horizontal-btm.css` so I name the class `horizontal-btm` too.

      * Example:
```html
<ul id="awb-item-container" class="horizontal-btm">
    <a id="show-item" href="#"><li class="awb-primary-item"><i class="fa fa-plus fa-lg awb-icon-white"></i></li></a>
  <li class="awb-item-1 awb-tooltip">
    <a href="#home">
      <i class="fa fa-home fa-lg awb-icon-white"></i>
    </a>
  </li>
  <li class="awb-item-2">
    <a href="#contact">
      <i class="fa fa-user fa-lg awb-icon-white"></i>
    </a>
  </li>
  <li class="awb-item-3">
    <a href="#pdf">
      <i class="fa fa-book fa-lg awb-icon-white"></i>
    </a>
  </li>
  <li class="awb-item-4">
    <a href="#close">
      <i class="fa fa-close fa-lg awb-icon-white"></i>
    </a>
  </li>
  <li class="awb-item-5">
    <a href="#thumbnail">
      <i class="fa fa-list fa-lg awb-icon-white"></i>
    </a>
  </li>
  <li class="awb-item-6">
    <a href="#Like Us!">
      <i class="fa fa-thumbs-o-up fa-lg awb-icon-white"></i>
    </a>
  </li>
</ul>
```
Have Done! With this template you can only make 6 menus maximal and 2 menus minimal.
