define(["exports", "babel-runtime/core-js/map", "babel-runtime/core-js/symbol/for"], function (exports, _map, _for) {
	/* -*- javascript -*- */
	"use strict";
	/* eslint-disable */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.AssociationFactoryFunctions = undefined;
	exports.association = association;

	var _map2 = _interopRequireDefault(_map);

	var _for2 = _interopRequireDefault(_for);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	const DATA = (0, _for2.default)("data"),
	      ASSOCIATIONS = (0, _for2.default)("associations");

	const AssociationFactoryFunctions = exports.AssociationFactoryFunctions = new _map2.default();

	AssociationFactoryFunctions.set("oneToMany", (name, modelClass, endpoint = null) => {
		return function (skipCache = false) {
			return this[ASSOCIATIONS][name] || this[DATA][name];
		};
	});
	AssociationFactoryFunctions.set("manyToOne", (name, modelClass, endpoint = null) => {
		return function (skipCache = false) {
			return this[ASSOCIATIONS][name] || this[DATA][name];
		};
	});
	AssociationFactoryFunctions.set("oneToOne", (name, modelClass, endpoint = null) => {
		return function (skipCache = false) {
			return this[ASSOCIATIONS][name] || this[DATA][name];
		};
	});

	/**
  * Decorator: @association
  * Adds an association to the model
  */
	function association(target) {
		return function declareAssociation(type, name, modelClass, endpoint = null) {
			let factoryFunction = AssociationFactoryFunctions.get(type);

			if (typeof factory !== "function") {
				throw `Unknown association type ${ type }`;
			}

			target[name] = factoryFunction(name, modelClass, endpoint);
		};
	}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc29jaWF0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBOzs7Ozs7O1NBNkJnQjs7Ozs7Ozs7Ozs7O0FBMUJoQixPQUFNLE9BQU8sbUJBQVksTUFBWixDQUFQO09BQ0EsZUFBZSxtQkFBWSxjQUFaLENBQWY7O0FBRUMsT0FBTSxvRUFBOEIsbUJBQTlCOztBQUViLDZCQUE0QixHQUE1QixDQUFpQyxXQUFqQyxFQUE4QyxDQUFDLElBQUQsRUFBTyxVQUFQLEVBQW1CLFdBQVMsSUFBVCxLQUFrQjtBQUNsRixTQUFPLFVBQVUsWUFBVSxLQUFWLEVBQWtCO0FBQ2xDLFVBQU8sS0FBTSxZQUFOLEVBQXNCLElBQXRCLEtBQWdDLEtBQU0sSUFBTixFQUFjLElBQWQsQ0FBaEMsQ0FEMkI7R0FBNUIsQ0FEMkU7RUFBckMsQ0FBOUM7QUFLQSw2QkFBNEIsR0FBNUIsQ0FBaUMsV0FBakMsRUFBOEMsQ0FBQyxJQUFELEVBQU8sVUFBUCxFQUFtQixXQUFTLElBQVQsS0FBa0I7QUFDbEYsU0FBTyxVQUFVLFlBQVUsS0FBVixFQUFrQjtBQUNsQyxVQUFPLEtBQU0sWUFBTixFQUFzQixJQUF0QixLQUFnQyxLQUFNLElBQU4sRUFBYyxJQUFkLENBQWhDLENBRDJCO0dBQTVCLENBRDJFO0VBQXJDLENBQTlDO0FBS0EsNkJBQTRCLEdBQTVCLENBQWlDLFVBQWpDLEVBQTZDLENBQUMsSUFBRCxFQUFPLFVBQVAsRUFBbUIsV0FBUyxJQUFULEtBQWtCO0FBQ2pGLFNBQU8sVUFBVSxZQUFVLEtBQVYsRUFBa0I7QUFDbEMsVUFBTyxLQUFNLFlBQU4sRUFBc0IsSUFBdEIsS0FBZ0MsS0FBTSxJQUFOLEVBQWMsSUFBZCxDQUFoQyxDQUQyQjtHQUE1QixDQUQwRTtFQUFyQyxDQUE3Qzs7Ozs7O0FBV08sVUFBUyxXQUFULENBQXNCLE1BQXRCLEVBQStCO0FBQ3JDLFNBQU8sU0FBUyxrQkFBVCxDQUE2QixJQUE3QixFQUFtQyxJQUFuQyxFQUF5QyxVQUF6QyxFQUFxRCxXQUFTLElBQVQsRUFBZ0I7QUFDM0UsT0FBSSxrQkFBa0IsNEJBQTRCLEdBQTVCLENBQWlDLElBQWpDLENBQWxCLENBRHVFOztBQUczRSxPQUFLLE9BQU8sT0FBUCxLQUFtQixVQUFuQixFQUFnQztBQUNwQyxVQUFNLENBQUMseUJBQUQsR0FBNEIsSUFBNUIsRUFBaUMsQ0FBdkMsQ0FEb0M7SUFBckM7O0FBSUEsVUFBUSxJQUFSLElBQWlCLGdCQUFpQixJQUFqQixFQUF1QixVQUF2QixFQUFtQyxRQUFuQyxDQUFqQixDQVAyRTtHQUFyRSxDQUQ4QjtFQUEvQiIsImZpbGUiOiJhc3NvY2lhdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuLyogZXNsaW50LWRpc2FibGUgKi9cblxuY29uc3QgREFUQSA9IFN5bWJvbC5mb3IoIFwiZGF0YVwiICksXG4gICAgICBBU1NPQ0lBVElPTlMgPSBTeW1ib2wuZm9yKCBcImFzc29jaWF0aW9uc1wiICk7XG5cbmV4cG9ydCBjb25zdCBBc3NvY2lhdGlvbkZhY3RvcnlGdW5jdGlvbnMgPSBuZXcgTWFwKCk7XG5cbkFzc29jaWF0aW9uRmFjdG9yeUZ1bmN0aW9ucy5zZXQoIFwib25lVG9NYW55XCIsIChuYW1lLCBtb2RlbENsYXNzLCBlbmRwb2ludD1udWxsKSA9PiB7XG5cdHJldHVybiBmdW5jdGlvbiggc2tpcENhY2hlPWZhbHNlICkge1xuXHRcdHJldHVybiB0aGlzWyBBU1NPQ0lBVElPTlMgXVsgbmFtZSBdIHx8IHRoaXNbIERBVEEgXVsgbmFtZSBdO1xuXHR9O1xufSk7XG5Bc3NvY2lhdGlvbkZhY3RvcnlGdW5jdGlvbnMuc2V0KCBcIm1hbnlUb09uZVwiLCAobmFtZSwgbW9kZWxDbGFzcywgZW5kcG9pbnQ9bnVsbCkgPT4ge1xuXHRyZXR1cm4gZnVuY3Rpb24oIHNraXBDYWNoZT1mYWxzZSApIHtcblx0XHRyZXR1cm4gdGhpc1sgQVNTT0NJQVRJT05TIF1bIG5hbWUgXSB8fCB0aGlzWyBEQVRBIF1bIG5hbWUgXTtcblx0fTtcbn0pO1xuQXNzb2NpYXRpb25GYWN0b3J5RnVuY3Rpb25zLnNldCggXCJvbmVUb09uZVwiLCAobmFtZSwgbW9kZWxDbGFzcywgZW5kcG9pbnQ9bnVsbCkgPT4ge1xuXHRyZXR1cm4gZnVuY3Rpb24oIHNraXBDYWNoZT1mYWxzZSApIHtcblx0XHRyZXR1cm4gdGhpc1sgQVNTT0NJQVRJT05TIF1bIG5hbWUgXSB8fCB0aGlzWyBEQVRBIF1bIG5hbWUgXTtcblx0fTtcbn0pO1xuXG5cbi8qKlxuICogRGVjb3JhdG9yOiBAYXNzb2NpYXRpb25cbiAqIEFkZHMgYW4gYXNzb2NpYXRpb24gdG8gdGhlIG1vZGVsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NvY2lhdGlvbiggdGFyZ2V0ICkge1xuXHRyZXR1cm4gZnVuY3Rpb24gZGVjbGFyZUFzc29jaWF0aW9uKCB0eXBlLCBuYW1lLCBtb2RlbENsYXNzLCBlbmRwb2ludD1udWxsICkge1xuXHRcdGxldCBmYWN0b3J5RnVuY3Rpb24gPSBBc3NvY2lhdGlvbkZhY3RvcnlGdW5jdGlvbnMuZ2V0KCB0eXBlICk7XG5cblx0XHRpZiAoIHR5cGVvZiBmYWN0b3J5ICE9PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHR0aHJvdyBgVW5rbm93biBhc3NvY2lhdGlvbiB0eXBlICR7dHlwZX1gO1xuXHRcdH1cblxuXHRcdHRhcmdldFsgbmFtZSBdID0gZmFjdG9yeUZ1bmN0aW9uKCBuYW1lLCBtb2RlbENsYXNzLCBlbmRwb2ludCApO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=