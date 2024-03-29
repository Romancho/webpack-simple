const select = document.getElementById("font-select");
const classNames = ['class01', 'class02'];
const fontsNames = ['Arial', 'Verdana'];

const createSelect = function () {
  for (let i = 0; i < classNames.length; i++) {
    let opt = classNames[i];
    let fonts = fontsNames[i];
    let el = document.createElement("option");
        el.textContent = fonts;
        el.value = opt;
        select.appendChild(el);
  }
}();

const SelectFonts = function() {
  $(select).on('change', function(){
    let s = $(this).find(':selected:not(:first-child)').val();
    if (s !== undefined) {
      $('body').removeClass().addClass(s);
    }
  })
}();
module.exports = createSelect;
module.exports = SelectFonts;