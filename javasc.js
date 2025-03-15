// scrollbar-hide
module.exports = {
    plugins: [require('tailwind-scrollbar-hide')],
  }

  // เปลี่ยนสีปุ่ม button ของ follow and unfollow
  function toggleFollow(button) {
    if (button.innerText === "Follow") {
        button.classList.remove("bg-gray-200");
        button.classList.add("bg-gradient-to-r", "from-pink-200", "to-gray-400", "text-black");
        button.innerText = "Unfollow";
    } else {
        button.classList.remove("bg-gradient-to-r", "from-pink-200", "to-gray-400", "text-black");
        button.classList.add("bg-gray-200");
        button.innerText = "Follow";
    }
  }

  function toggleImage(img) {
    // ดึงตัว src ของปัจจุบัน
    let currentSrc = img.getAttribute("src"); 
    // ดึง data-alt-src ที่เอาไว้สลับรูป
    let altSrc = img.getAttribute("data-alt-src");

    // สลับรูปไปมาระหว่าง active กับ not active
    img.setAttribute("src",altSrc);
    img.setAttribute("data-alt-src",currentSrc);
  }