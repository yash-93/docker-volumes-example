const fs = require('fs');
const path = require('path');

const getFileData = (req, res, next) => {
  const dirLocation = path.join(__dirname,'../') + 'data';
  const fileName = 'data.txt'
  const fileLocation = dirLocation + `/${fileName}`;
  console.log(dirLocation);
  console.log(fileLocation);

  const dirName = path.dirname(fileLocation);
  if(!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName, { recursive: true });
  }

  try {
    console.log('Reading existing file.');
    const data = fs.readFileSync(fileLocation, { encoding: 'utf8', flag: 'r' });
    console.log(data);
  } catch(err) {
    if(err.code == 'ENOENT') {
      console.log('Creating file as does not exist.');
      fs.writeFileSync(fileLocation, 'Hello.');
      const data = fs.readFileSync(fileLocation, { encoding: 'utf8', flag: 'r' });
      console.log(data);
    }
  }

  res.json({
    'response': 'success'
  });
}

exports.getFileData = getFileData;
