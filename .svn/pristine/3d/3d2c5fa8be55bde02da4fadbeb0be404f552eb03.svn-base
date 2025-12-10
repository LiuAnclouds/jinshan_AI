import * as Blockly from 'blockly/core';
import 'blockly/python';
import {CategoryColors} from '@/global/colors';

// ---------------------------
// Flask 应用初始化
// ---------------------------
const defaultAppInitCode = `
app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = "static/uploads"
os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)
`;

// ---------------------------
// 加载模型（离线）
// ---------------------------
const imageAnalysisModelCode = `
class ImageAnalysisModel:
    def __init__(self):
        self.model = models.mobilenet_v2(
            weights=models.MobileNet_V2_Weights.IMAGENET1K_V1
        )
        self.model.eval()
        self.preprocess = models.MobileNet_V2_Weights.IMAGENET1K_V1.transforms()
        self.labels = models.MobileNet_V2_Weights.IMAGENET1K_V1.meta["categories"]

    def process_image(self, image_path):
        image = Image.open(image_path).convert("RGB")
        tensor = self.preprocess(image).unsqueeze(0)

        with torch.no_grad():
            pred = self.model(tensor).softmax(dim=1)

        top_id = pred.argmax().item()
        label = self.labels[top_id]
        confidence = pred[0, top_id].item()
        return {'label': label, 'probability': confidence}
`;

// ---------------------------
// TTS 语音转换
// ---------------------------
const textToSpeechCode = `
class TextToSpeech:
    def __init__(self):
        self.audio_txt = ""
        self.base64_audio = ""

    def text_to_base64_audio(self, text):
        if not text:
            return None
        
        if self.audio_txt == text and self.base64_audio:
            return self.base64_audio
        try:
            with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as fp:
                tmp_path = fp.name

            engine = pyttsx3.init()
            engine.save_to_file(text, tmp_path)
            engine.runAndWait()

            with open(tmp_path, "rb") as f:
                audio_bytes = f.read()

            os.unlink(tmp_path)
            engine.stop()

            self.audio_txt = text
            self.base64_audio = base64.b64encode(audio_bytes).decode("utf-8")
            return self.base64_audio
            
        except Exception as e:
            print(f"Error: {e}")
            if os.path.exists(tmp_path):
                os.unlink(tmp_path)
            return None 
    

    def text_to_base64_audio_html(self, text):
        """将文本转换为base64编码的音频"""
        if not text:
            return None
        
        base64_audio = self.text_to_base64_audio(text)
        if not base64_audio:
            return None
        
        try:
            html_content = f"""
            <!DOCTYPE html>
            <html>
            <head>
                <title>语音播放</title>
                <style>
                    body {{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        background-color: #f0f0f0;
                        font-family: Arial, sans-serif;
                    }}
                    .container {{
                        text-align: center;
                        padding: 20px;
                        background-color: white;
                        border-radius: 10px;
                        box-shadow: 0 0 10px rgba(0,0,0,0.1);
                    }}
                    .text-content {{
                        margin: 20px 0;
                        padding: 10px;
                        background-color: #f8f8f8;
                        border-radius: 5px;
                    }}
                </style>
            </head>
            <body>
                <div class="container">
                    <h2>语音播放</h2>
                    <div class="text-content">
                        <p>{text}</p>
                    </div>
                    <audio controls autoplay>
                        <source src="data:audio/wav;base64,{base64_audio}" type="audio/wav">
                        您的浏览器不支持音频播放。
                    </audio>
                </div>
            </body>
            </html>
            """
            temp_html = tempfile.NamedTemporaryFile(delete=False, suffix='.html', mode='w', encoding='utf-8')
            temp_html.write(html_content)
            temp_html.close()
            
            return temp_html.name
            
        except Exception as e:
            print(f"Error: {e}")
            return None 
`;

Blockly.Blocks['env_bcst_init'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.System,
            "message0": '智能环境语音播报系统 初始化'
        });
    }
};
Blockly.Python['env_bcst_init'] = function (block) {
    Blockly.Python.definitions_['import_modules'] = 'import os, base64, tempfile, torch, pyttsx3, webbrowser';
    Blockly.Python.definitions_['from_flask_import'] = 'from flask import Flask, request, render_template, jsonify';
    Blockly.Python.definitions_['from_PIL_import_image'] = 'from PIL import Image';
    Blockly.Python.definitions_['from_torchvision_import_models'] = 'from torchvision import models';
    Blockly.Python.definitions_['app_init'] = defaultAppInitCode;
    Blockly.Python.functions_['def_route_template'] = `
@app.route("/")
def index():
    return render_template("index.html")
`  
    let code = `
if __name__ == "__main__":
    app.run(debug=True)
`;
    return code;
};


// 图像识别
Blockly.Blocks['env_bcst_img_analyze'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.System,
            "message0": '智能环境语音播报系统 图像识别'
        });
    }
};
Blockly.Python['env_bcst_img_analyze'] = function (block) {
    Blockly.Python.definitions_['class_ImageAnalysisModel'] = imageAnalysisModelCode
    Blockly.Python.definitions_['def_image_model'] = 'image_model = ImageAnalysisModel()';
    Blockly.Python.functions_['def_route_upload_analyze'] = `
@app.route("/upload", methods=["POST"])
def upload():
    if "image" not in request.files:
        return jsonify({"error": "没有上传文件"}), 400

    file = request.files["image"]
    if file.filename == "":
        return jsonify({"error": "文件名为空"}), 400

    filepath = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
    file.save(filepath)
    return {'result': filepath}


@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    filepath = data.get("path", "")
    if not filepath or not os.path.exists(filepath):
        return jsonify({"error": "文件不存在"}), 400
    result = image_model.process_image(filepath)

    return jsonify({ "result": result })
`;
    return '';
};


// 语音播放
Blockly.Blocks['env_bcst_txt_to_speech'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.System,
            "message0": '智能环境语音播报系统 语音播放'
        });
    }
};
Blockly.Python['env_bcst_txt_to_speech'] = function (block) {
    Blockly.Python.definitions_['class_TextToSpeech'] = textToSpeechCode;
    Blockly.Python.definitions_['def_tts'] = 'tts = TextToSpeech()';
    Blockly.Python.functions_['def_route_tts'] = `
@app.route("/tts", methods=["POST"])
def tts_api():
    data = request.json
    text = data.get("text", "")
    if not text:
        return jsonify({"error": "没有文本"}), 400
    audio_base64 = tts.text_to_base64_audio(text)
    return jsonify({"audio": audio_base64})
`
    return '';
};


// 网页播放
Blockly.Blocks['env_bcst_web_to_speech'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": CategoryColors.System,
            "message0": '智能环境语音播报系统 网页播放'
        });
    }
};
Blockly.Python['env_bcst_web_to_speech'] = function (block) {
    Blockly.Python.definitions_['class_TextToSpeech'] = textToSpeechCode;
    Blockly.Python.definitions_['def_tts'] = 'tts = TextToSpeech()';
    Blockly.Python.functions_['def_route_audio_page'] = `
@app.route("/audio_page", methods=["POST"])
def audio_page():
    data = request.json
    text = data.get("text", "")
    if not text:
        return jsonify({"error": "没有文本"}), 400
    html_path = tts.text_to_base64_audio_html(text)

    if html_path:
        webbrowser.open(html_path)
    
    return jsonify({"result": "success"})
`;
    return '';
};