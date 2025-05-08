const https = require('https');
const fs = require('fs');
const path = require('path');

// Создаем директории, если они не существуют
const dirs = ['public/fonts', 'public/css', 'public/js'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  // Создаем .gitkeep файлы
  fs.writeFileSync(path.join(dir, '.gitkeep'), '');
});

// Функция для скачивания файла
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${dest}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // Удаляем файл в случае ошибки
      reject(err);
    });
  });
}

// Список файлов для скачивания
const files = [
  // Шрифты
  {
    url: 'https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2',
    dest: 'public/fonts/OpenSans-Regular.woff2'
  },
  {
    url: 'https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSumu.woff2',
    dest: 'public/fonts/OpenSans-SemiBold.woff2'
  },
  {
    url: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2',
    dest: 'public/fonts/Roboto-Regular.woff2'
  },
  {
    url: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4.woff2',
    dest: 'public/fonts/Roboto-Bold.woff2'
  },
  // CSS файлы
  {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
    dest: 'public/css/all.min.css'
  },
  // JavaScript файлы
  {
    url: 'https://code.jquery.com/jquery-3.7.1.min.js',
    dest: 'public/js/jquery-3.7.1.min.js'
  },
  {
    url: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
    dest: 'public/js/bootstrap.bundle.min.js'
  },
  {
    url: 'https://cdn.jsdelivr.net/npm/parallax-js@3.1.0/dist/parallax.min.js',
    dest: 'public/js/parallax.min.js'
  }
];

// Скачиваем все файлы
async function downloadAll() {
  console.log('Starting downloads...');
  for (const file of files) {
    try {
      await downloadFile(file.url, file.dest);
    } catch (err) {
      console.error(`Error downloading ${file.dest}:`, err);
    }
  }
  console.log('All downloads completed!');
}

downloadAll();