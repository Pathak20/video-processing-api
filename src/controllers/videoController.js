const ffmpeg = require('fluent-ffmpeg');

exports.uploadVideo = async (req, res) => {
    const inputFilePath = req.body.filePath;
    const outputFilePath = 'output.mp4';

    ffmpeg(inputFilePath)
        .output(outputFilePath)
        .on('end', () => res.json({ message: 'Video processed successfully' }))
        .run();
};
