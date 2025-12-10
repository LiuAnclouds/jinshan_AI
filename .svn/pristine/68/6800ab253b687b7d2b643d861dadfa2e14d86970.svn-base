const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const { textToSpeech } = require('./models/speech');

const app = express();
app.use(cors());
app.use(express.json()); // 解析 application/json 请求体
app.use('/', express.static(path.join(__dirname, './static/')));


app.post('/api/speech', async (req, res) => {
  try {
    const { text } = req.body;
    let result = await textToSpeech(text);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ flag: false, msg: err.message });
  }
});

app.get('/api/example', (req, res) => {
  try {
    const { name } = req.query;
    if (!fs.existsSync(path.join(__dirname, `./example/${name}.mxml`))) {
      res.json({ flag: false, result: null, msg: '文件不存在！' });
      return;
    }
    const content = fs.readFileSync(path.join(__dirname, `./example/${name}.mxml`), 'utf-8');
    res.json({ flag: true, result: content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ flag: false, msg: err.message });
  }
});

app.listen(8001, () => console.log('Server running on http://localhost:8001'));
