const {Users} = require('./users');

const expect = require('expect');

describe('Users', () => {
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: 1234456,
            name: 'Anshul',
            room: 'Dummy'
        };

        let res = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
        
    });
});