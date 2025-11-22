// اختر كل الصور داخل المعرض
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

// فتح الصورة عند الضغط
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        openLightbox();
    });
});

function openLightbox() {
    lightbox.style.display = "flex"; // هنا Lightbox يظهر فقط عند الضغط
    lightboxImg.src = images[currentIndex].src;
}

// إغلاق Lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// التنقل يمين
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// التنقل يسار
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// دعم الكيبورد
document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowRight") nextBtn.click();
        if (e.key === "ArrowLeft") prevBtn.click();
        if (e.key === "Escape") lightbox.style.display = "none";
    }
});
/* ============================
      Video Lightbox
============================ */

const videoItems = document.querySelectorAll(".vid-item");
const videoLightbox = document.getElementById("videoLightbox");
const videoPlayer = document.getElementById("videoPlayer");
const closeVideo = document.getElementById("closeVideo");

videoItems.forEach(video => {
    video.addEventListener("click", () => {
        videoLightbox.style.display = "flex";
        videoPlayer.src = video.src;
        videoPlayer.play();
    });
});

closeVideo.addEventListener("click", () => {
    videoLightbox.style.display = "none";
    videoPlayer.pause();
    videoPlayer.src = "";
});

videoLightbox.addEventListener("click", (e) => {
    if (e.target === videoLightbox) {
        videoLightbox.style.display = "none";
        videoPlayer.pause();
        videoPlayer.src = "";
    }
});
// جلب كل القوائم المنسدلة
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(drop => {
  const btn = drop.querySelector('.dropbtn');
  const menu = drop.querySelector('.menu-items');

  // فتح/إغلاق القائمة عند الضغط على الزر
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // منع انتشار الحدث
    // إغلاق كل القوائم الأخرى قبل فتح هذه
    dropdowns.forEach(d => {
      if (d !== drop) d.querySelector('.menu-items').style.display = 'none';
    });
    // تبديل عرض القائمة الحالية
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  });
});

// إغلاق القوائم عند الضغط في أي مكان خارجها
document.addEventListener('click', () => {
  dropdowns.forEach(drop => {
    drop.querySelector('.menu-items').style.display = 'none';
  });
});
// === JS لتفعيل زر الهامبورجر ===
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  if(menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});