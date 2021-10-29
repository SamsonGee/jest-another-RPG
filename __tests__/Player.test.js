const Player = require('../lib/Player');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion.js');

test('create a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
});

test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');

    expect(player)
})
