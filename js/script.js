let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
//file input
$(".custom-file-upload .upload-change").change(function () {
  let file_val;
  if ($(this).val() == "") {
    file_val = $(".file-txt").data("title");
  } else {
    file_val = $(this).prop("files")[0].name;
  }
  $(".file-txt").html(file_val);
});
$(document).ready(function () {
  const selectExists =
    document.getElementsByClassName("select_input").length > 0;
  if (selectExists) {
    const $select2 = $(".select_input");
    $select2.select2();
  }
});

var placeholder = "ابحث باسم التخصص";
const multiSelectExists =
  document.getElementsByClassName("multi-select").length > 0;
if (multiSelectExists) {
  const $multiSelect2 = $(".multi-select");
  $multiSelect2.select2({
    closeOnSelect: false,
    placeholder: placeholder,
    allowHtml: true,
    dropdownParent: $(".multiple-select"),
    allowClear: false,
    // tags: true,
  });
}
