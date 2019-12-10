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
