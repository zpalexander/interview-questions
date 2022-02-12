import { courseSchedule } from '../../solutions/algorithms/course-schedule';

describe('Course Schedule', () => {
    it('should return true for a possible course schedule', () => {
        expect(courseSchedule(2, [[1, 0]])).toEqual(true);
    });

    it('should return false for an impossible course schedule', () => {
        expect(courseSchedule(2, [[1, 0], [0, 1]])).toEqual(false);
    });

    it('should return true for a longer possible course schedule', () => {
        expect(courseSchedule(5, [[0, 1], [0, 2], [1, 3], [1, 4], [3, 4]])).toEqual(true);
    });
});
