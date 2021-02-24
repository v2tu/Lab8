const formatVolumeIconPath = require('../assets/scripts/main')
const formatVol = require('../assets/scripts/main')

describe('formatVol', () =>{
    test('icon change to 3', () =>{
        expect(formatVol(70)).toMatch(`./assets/media/icons/volume-level-3.svg`)
    });

    test('icon change to 2', () =>{
        expect(formatVol(35)).toMatch(`./assets/media/icons/volume-level-2.svg`)
    });

    test('icon change to 1', () =>{
        expect(formatVol(1)).toMatch(`./assets/media/icons/volume-level-1.svg`)
    });

    test('icon change to 0', () =>{
        expect(formatVol(0)).toMatch(`./assets/media/icons/volume-level-0.svg`)
    });
})