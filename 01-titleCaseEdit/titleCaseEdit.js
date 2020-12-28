function titleCaseEdit(title) {
  // Insert code here;
  var title = title.toLowerCase().split(" ");

 for (var i = 0; i < title.length; i++){
   title[i] = title[i][0].toUpperCase() + title[i].slice(1);
  }

  return title.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;
