import { getNDegreesOfSeparation } from '../../solutions/logic/n-degrees-of-separation';

class Person {
    constructor(id, friends) {
        this._id = id;
        this._friends = friends;
    }

    getId() {
        return this._id;
    }

    getFriends() {
        return this._friends;
    }

    setFriends(friends) {
        this._friends = friends;
    }
}

// Create people
const Joe = new Person('Joe', []);
const Sue = new Person('Sue', []);
const Mary = new Person('Mary', [])
const Gene = new Person('Gene', []);
const Fred = new Person('Fred', []);
const Feldman = new Person('Feldman', []);
const Artemis = new Person('Artemis', []);

// Create network
Joe.setFriends([Sue, Mary, Gene]);
Sue.setFriends([Joe]);
Mary.setFriends([Joe, Feldman]);
Gene.setFriends([Joe, Fred]);
Fred.setFriends([Gene, Feldman])
Feldman.setFriends([Mary, Fred]);

describe('Logic - N Degrees of Separation', () => {
    it('should find that Joe is 2 degrees of separation away from Feldman', () => {
        expect(getNDegreesOfSeparation(Joe, 'Feldman')).toEqual(2);
    });

    it('should find that Fred is 1 degree of separation away from Gene', () => {
        expect(getNDegreesOfSeparation(Fred, 'Gene')).toEqual(1);
    });

    it('should find that Joe is not connected to Artemis in the social network', () => {
        expect(getNDegreesOfSeparation(Joe, 'Artemis')).toEqual(-1);
    });
});

