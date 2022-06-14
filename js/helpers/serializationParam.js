export function serializationParam(paramString){
    return Object.fromEntries([decodeURI(paramString).split('=')])
}
