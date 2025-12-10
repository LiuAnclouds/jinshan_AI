const path = require('path');
const { exec } = require('child_process');
const AUDIO_DIR = 'static/audio';

async function textToSpeech(text) {
  return new Promise(resolve => {
    if (!text) return resolve({flag: false, msg: '缺少文本', result: null});
    const fileName = `tts_${Date.now()}.wav`;
    const filePath = path.join(AUDIO_DIR, fileName);

    // Windows 指定中文语音
    const voice = 'Microsoft Huihui Desktop';

    // say 不支持直接保存 wav，需要调用系统命令
    // PowerShell TTS
    const cmd = `PowerShell -Command "Add-Type -AssemblyName System.Speech; $speak = New-Object System.Speech.Synthesis.SpeechSynthesizer; $speak.SelectVoice('${voice}'); $speak.SetOutputToWaveFile('${filePath}'); $speak.Speak('${text}'); $speak.Dispose()"`;

    exec(cmd, (err) => {
      if (err) {
        console.error(err);
        return resolve({flag: false, msg: 'TTS 生成失败', result: null});
      }
      resolve({flag: true, msg: 'TTS 生成完成', result: fileName});
    });
  })
  
}

module.exports = { textToSpeech };