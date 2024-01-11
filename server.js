const fs = require("fs");
const path = require("path");

function readFilesInDirectory(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    files.forEach((file) => {
      const filePath = path.join(directory, file);
     
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }
        if (stats.isFile()) {
          
          const newFilePath = filePath.replace('[一手资料＋v 554250521]','')
          fs.rename(filePath, newFilePath, (err) => {
            if (err) {
              console.error('文件名修改失败：', err);
            } else {
              console.log('文件名修改成功',filePath,newFilePath);
            }
          });
        } else if (stats.isDirectory()) {
          readFilesInDirectory(filePath);
        }
      });
    });
  });
}

readFilesInDirectory("./books/");
