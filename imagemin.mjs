import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'

await imagemin(['assets/*.{jpg,png}'], {
    destination: 'public/img',
    plugins: [imageminWebp({ quality: 50 })]
})

console.log('Images optimized')
