const inputEl = document.getElementById('file-input');
const postEl = document.getElementById('post');
let fileSrc = "";
inputEl.addEventListener('change', function (event) {
    file = event.target.files[0]; // الحصول على الملف الأول
    if (file) {
        const reader = new FileReader(); // إنشاء كائن FileReader
        const fileType = file.type;
 
        // التأكد من نوع الملف (صورة أو فيديو)
        if (fileType.startsWith('image/')) {
            reader.onload = function (e) {
                const img = document.createElement('img'); // إنشاء عنصر <img>
                img.src = e.target.result; // تعيين مصدر الصورة
                fileSrc = e.target.result;
                localStorage.setItem("src", fileSrc);
                postEl.innerHTML = ''; // مسح المحتوى الحالي
                postEl.appendChild(img); // إضافة الصورة إلى div
            };
        }
        reader.readAsDataURL(file); // قراءة الملف كـ Data URL
    }
});
