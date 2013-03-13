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
 * @class Physics
 * @name physics
 * @requires rat
 */
var physics = {};

/**
 * Fine-structure constant (α)
 *
 * @property FINESTRUCTURE
 * @type rat
 * @static
 * @final
 */
physics.FINESTRUCTURE = rat.fromValues(145947, 20000000);

/**
 * Alias for {@link physics.FINESTRUCTURE}
 * @type rat
 * @static
 * @final
 */
physics.A = physics.FINESTRUCTURE;

/**
 * Planck's constant (h) in Joule seconds
 *
 * @property PLANKS
 * @type rat
 * @static
 * @final
 */
physics.PLANK = rat.fromValues(662606957, 1e42);

/**
 * Alias for {@link physics.PLANKS}
 * @type rat
 * @static
 * @final
 */
physics.H = physics.PLANK;

/**
 * Reduced Planck's constant (h / 2π)
 *
 * @property HBAR
 * @type rat
 * @static
 * @final
 */
physics.HBAR = rat.fromValues(1054571726, 1e43);
