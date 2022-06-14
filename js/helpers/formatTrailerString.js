export function formatTrailerURL(url) {
    if(url.includes('youtube')){
        return url.replace('watch?v=', 'embed/');
    }
    return url
}