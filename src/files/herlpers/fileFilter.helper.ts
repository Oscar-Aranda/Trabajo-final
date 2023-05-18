export const fileFilter = (req, file: Express.Multer.File,callback) => {
    if(!file){
        return callback( new Error('Archivo vacio'), false);
    }

    const filExtension = file.mimetype.split('/')[1];
    const validExtencion = ['jpeg', 'jpg', 'png'];

    if (validExtencion.includes(filExtension)){
        return callback(null, true);
    }

    callback(null, false);
};