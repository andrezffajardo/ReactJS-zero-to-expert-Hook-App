export const heavyProcess = ( interactions ) => {

    for( let i = 0; i < interactions; i ++) {
        console.log('Here we go...')
    }
    return `${ interactions } iteractions done`;
}
