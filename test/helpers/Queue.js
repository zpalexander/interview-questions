/**
 * Queue.js
 *
 * Generator function for a queue data structure
 */
export default function Queue() {
    var queue = function() {
        this.list = [];
    }

    queue.prototype.enqueue = function(item) {
        this.list.push(item);
    }

    queue.prototype.dequeue = function() {
        return this.list.shift();
    }

    queue.prototype.isEmpty = function() {
        if (this.list.length < 1) {
            return true;
        }
        return false;
    }

    return new queue();
}
