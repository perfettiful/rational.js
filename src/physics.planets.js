/*
 * rational.js - Javascript tools and libraries based around rational numbers.
 * Copyright (C) 2013 Dylan Ferris
 *
 * This file is part of rational.js.
 *
 * rational.js is free software: you may redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * rational.js is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with rational.js.  If not, see <http://www.gnu.org/licenses/>.
 */
 
/**
 * @class Planet physics
 * @name planet
 * @requires vec3
 */
var planet = function(x, y, radius, mass) {
	
	// position
	this.p = vec3.fromValues(x, y, 0);
	
	// velocity
	this.v = vec3.fromValues(0, 0, 0);
	
	// quadrance (radius squared)
	//this.R = bigrat.pow(bigrat.create(), bigrat.fromDecimal(radius), 2);
	this.R = radius * radius;
	
	// mass
	//this.m = bigrat.fromDecimal(mass);
	this.m = mass;
}

/**
 * Returns a string representation of the planet
 *
 * @returns {String}
 */
planet.prototype.toString = function() {
	return vec3.str(this.p);
};

/**
 * Returns the force of gravity pulling this planet towards that one
 *
 * @returns {vec3}
 */
planet.prototype.getGravity = function(that) {
	
	var gravity = vec3.create();
	vec3.sub(gravity, this.p, that.p);
	vec3.normalize(gravity, gravity);
	
	var magnitude = (this.m * that.m) / vec3.sqrDist(this.p, that.p);
	
	return vec3.scale(gravity, gravity, magnitude);
};

if(typeof(exports) !== 'undefined') {
	exports.planet = planet;
}
