/**
 * Generates a random number within the specified range.
 *
 * @method rand
 * @param min {Number} The lower bound.
 * @param max {Number} The upper bound.
 * @return {Number} The random number.
 */
window.rand = function(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
};
/**
 * A simple method that adds a `hover` class to the target.
 *
 * @method addHoverTarget
 * @param e {Object} The mouse event object.
 */
window.addHoverTarget = function(e) {
	var $el = $(e.target);
	$el.addClass("hover");
};
/**
 * A simple method that removes a `hover` class from the target.
 *
 * @method removeHoverTarget
 * @param e {Object} The mouse event object.
 */
window.removeHoverTarget = function(e) {
	var $el = $(e.target);
	$el.removeClass("hover");
};
/**
 * A simple method that adds a `hover` class to the target.
 *
 * @method addHoverCurrentTarget
 * @param e {Object} The mouse event object.
 */
window.addHoverCurrentTarget = function(e) {
	var $el = $(e.currentTarget);
	$el.addClass("hover");
};
/**
 * A simple method that removes a `hover` class from the target.
 *
 * @method removeHoverCurrentTarget
 * @param e {Object} The mouse event object.
 */
window.removeHoverCurrentTarget = function(e) {
	var $el = $(e.currentTarget);
	$el.removeClass("hover");
};
