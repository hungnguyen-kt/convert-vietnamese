console.log(
  "%cConvert Vietnamese accented characters to non-accented equivalents - Created by: Hùng Nguyễn",
  "color: red; font-weight: bold; font-size: 32px;"
);

/**
 * Convert Vietnamese accented characters to non-accented equivalents
 * @param {string} text - Text with Vietnamese characters to convert
 * @return {string} Text with Vietnamese characters converted to standard Latin characters
 */
function convertVietnamese(text) {
  const vietnameseMap = {
    "á|à|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ": "a",
    "Á|À|Ả|Ã|Ạ|Ă|Ắ|Ằ|Ẳ|Ẵ|Ặ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ": "A",
    đ: "d",
    Đ: "D",
    "é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ": "e",
    "É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ": "E",
    "í|ì|ỉ|ĩ|ị": "i",
    "Í|Ì|Ỉ|Ĩ|Ị": "I",
    "ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ": "o",
    "Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ": "O",
    "ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự": "u",
    "Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự": "U",
    "ý|ỳ|ỷ|ỹ|ỵ": "y",
    "Ý|Ỳ|Ỷ|Ỹ|Ỵ": "Y",
  };

  return Object.entries(vietnameseMap).reduce(
    (result, [pattern, replacement]) => {
      const regex = new RegExp(pattern, "g");
      return result.replace(regex, replacement);
    },
    text
  );
}

/**
 * Display validation messages to the user
 * @param {string} message - Message to display
 */
function showMessage(message) {
  alert(message);
}

/**
 * Handle the text conversion process
 */
function handleConvert() {
  const inputElement = document.getElementById("input");
  const resultElement = document.getElementById("result");

  if (!inputElement.value.trim()) {
    showMessage("Vui lòng nhập dữ liệu");
    return;
  }

  resultElement.innerHTML = convertVietnamese(inputElement.value);
}

/**
 * Copy the result text to clipboard
 */
function handleCopy() {
  const resultElement = document.getElementById("result");

  if (!resultElement.value?.trim()) {
    showMessage("Không có dữ liệu để copy");
    return;
  }

  navigator.clipboard
    .writeText(resultElement.value)
    .then(() => showMessage("Đã copy vào clipboard"))
    .catch((err) => console.error("Unable to copy text to clipboard", err));
}

/**
 * Clear all input and result fields
 */
function handleClear() {
  document.getElementById("input").value = "";
  document.getElementById("result").innerHTML = "";
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("convert").addEventListener("click", handleConvert);
  document.getElementById("copy").addEventListener("click", handleCopy);
  document.getElementById("clear").addEventListener("click", handleClear);
});
