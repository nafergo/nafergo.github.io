---
layout: page
title: About me
permalink: /about/
---

I’m Nelson Gonçalves, a freelance 3D generalist and educator living in Portugal. My work spans a wide range of subjects and styles with a special focus on architecture visualization, digital heritage and stylized cartoons. Additionally, I have extensive experience in higher education and training.

I’m available for freelance jobs and commissions. Feel free to contact me for any business inquiries or just say hello. Drop me a line and a real person will read it :)

### This Blog
This blog is where I share and log some experiences and news. It's a record of events, experiences, thoughts and personal projects. All texts and images are entirely of my own work and creation unless otherwise referenced or acknowledged. It is not affiliated with any company or any other person.

### portfolio
If you're looking for my portfolio, please check the links below.

If you're looking for samples of my commercial work, the “works made for hire”, please contact me. That section is password protected with a “password upon request” policy. Please understand that some work can't be publish publicly, either because I signed a NDA or because I believe that the client expects confidentiality.

### higher education and training
If you're looking for my CV or experience related to higher education and training, please check [this list](https://nafergo.github.io/myrefs/). It's a WIP but also probably the most complete list available for my academia and education/training work.

#### Contacts
To contact me, you can send an email to **nafergo[AT]gmail[DOT]com** or use the links below.

<div id='gallery'></div>

<script>
(function() {
  var displayData, getUrl, nextPage, nextUrl, prevPage, prevUrl, ready;

  nextUrl = '';

  prevUrl = '';

  getUrl = function(url) {
    return $.getJSON(url, {
      callback: '',
      jsonp: '',
      format: 'json'
    }).done(function(data) {
      if (data.next) {
        $('#nextBtn').prop('disabled', false);
        nextUrl = data.next;
      } else {
        $('#nextBtn').prop('disabled', true);
      }
      if (data.previous) {
        prevUrl = data.previous;
        $('#prevBtn').prop('disabled', false);
      } else {
        $('#prevBtn').prop('disabled', true);
      }
      displayData(data);
    });
  };

  nextPage = function() {
    $('#gallery').empty();
    return getUrl(nextUrl);
  };

  prevPage = function() {
    $('#gallery').empty();
    return getUrl(prevUrl);
  };

  displayData = function(data) {
    $.each(data.results, function(i, model) {
      var height, html, width;
      if (model.isPrintable !== true) {
        width = 320;
        height = 240;
        html = "<div class=\"col-md-4 sketchfab-gallery-item\">\n<iframe width=\"" + width + "\" height=\"" + height + "\" src=\"https://sketchfab.com/models/" + model['uid'] + "/embed\" frameborder=\"0\" allowfullscreen mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" onmousewheel=\"\"></iframe>\n<p style=\"font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;\">\n  <a href=\"https://sketchfab.com/models/" + model['uid'] + "?utm_source=oembed&utm_medium=embed&utm_campaign=" + model['uid'] + "\" target=\"_blank\" style=\"font-weight: bold; color: #1CAAD9;\">" + model['name'] + "</a>\n  by <a href=\"https://sketchfab.com/" + model['user']['username'] + "?utm_source=oembed&utm_medium=embed&utm_campaign=" + model['uid'] + "\" target=\"_blank\" style=\"font-weight: bold; color: #1CAAD9;\">" + model['user']['username'] + "</a>\n  on <a href=\"https://sketchfab.com?utm_source=oembed&utm_medium=embed&utm_campaign=" + model['uid'] + "\" target=\"_blank\" style=\"font-weight: bold; color: #1CAAD9;\">Sketchfab</a>\n</p>\n</div>";
        $('#gallery').append(html);
        return;
      }
    });
  };

  ready = function() {
    $('#nextBtn').prop('disabled', true);
    $('#nextBtn').click(nextPage);
    $('#prevBtn').prop('disabled', true);
    $('#prevBtn').click(prevPage);
    return getUrl('https://api.sketchfab.com/v3/collections/aad11bde3273414a999758a2fd3f0958/models?');
/*
collection   return getUrl('https://api.sketchfab.com/v3/collections/aad11bde3273414a999758a2fd3f0958/models?');
user return getUrl('https://api.sketchfab.com/v3/models?user=nafergo&sort_by=-publishedAt');
tags return getUrl('https://api.sketchfab.com/v3/models?tags=rekrei&tags=projectmosul&sort_by=-publishedAt');

    -like_count
    like_count
    -view_count
    view_count
    -published_at
    published_at
*/
  };

  $(document).ready(ready);

  $(document).on('page:load', ready);

}).call(this);
</script>
