const axios = require("axios");
const decompress = require('decompress')
async function main() {
    const release = await (await axios.get('https://github.com/linkasu/EyeLog/releases/download/1.1.0.0/Release.zip', { responseType: 'arraybuffer' })).data;
    decompress(release, './bin/');
}
main();
