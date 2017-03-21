function () {
  return function (items) {
    var filtered = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (/a/i.test(item.name.substring(0, 1))) {
        filtered.push(item);
      }
    }
    return filtered;
  };
