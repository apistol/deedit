import multer, { FileFilterCallback } from 'multer';
import path from 'path';

export const upload = multer({
    storage: multer.diskStorage({
        destination: 'public/images', // Ensure this directory exists or is created dynamically
        filename: (_, file, callback) => {
            const name = makeId(15);
            callback(null, name + path.extname(file.originalname));
        },
    }),
    fileFilter: (_, file, callback: FileFilterCallback) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            callback(null, true);
        } else {
            callback(new Error('Not an image'));
        }
    },
});


// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
export function makeId(length: number): string {
    let result = ''
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

// https://gist.github.com/codeguy/6684588#gistcomment-2759673
export function slugify(str: string): string {
    str = str.trim()
    str = str.toLowerCase()

    // remove accents, swap ñ for n, etc
    const from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;'
    const to = 'aaaaaaeeeeiiiioooouuuunc------'

    for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    return str
        .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-') // collapse dashes
        .replace(/^-+/, '') // trim - from start of text
        .replace(/-+$/, '') // trim - from end of text
        .replace(/-/g, '_')
}