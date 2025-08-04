const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const fileInput = document.getElementById('file');
  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();

  xhr.open('POST', form.action);

  xhr.upload.onprogress = function(event) {
    if (event.lengthComputable) {
      const percent = event.loaded / event.total;
      progress.value = percent;
    }
  };

  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Файл успешно загружен!');
    } else {
      alert('Ошибка загрузки файла');
    }
    progress.value = 0;
  };

  xhr.onerror = function() {
    alert('Произошла ошибка при отправке запроса.');
    progress.value = 0;
  };

  xhr.send(formData);
});