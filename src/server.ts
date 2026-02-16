import express, {type Request, type Response} from 'express';
import fileUpload, {type UploadedFile} from 'express-fileupload';
import {PDFParse} from 'pdf-parse';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: '*', // Allow all origins
}));

app.use(fileUpload({
    limits: {fileSize: 50 * 1024 * 1024}, // Limit file size to 50MB
    abortOnLimit: true, // Abort the request if the file size exceeds the limit
}));

app.get('/', (_req: Request, res: Response) => {
    res.json({message: 'Welcome to the PDF Text Extractor API!'});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});