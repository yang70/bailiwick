/**
* Bailiwick.Model
*
* The base model class.
*
*/

import Promise from 'bluebird';
import inflection from 'inflection';


export class Model {

	/**
	 * Get the relative URI for the service endpoint for the receiving class.
	 */
	static get uri() {
		let name = this.constructor.name;
		return inflection.tableize( name );
	}


	/**
	 * Get instances of the model.
	 */
	static get( id_or_criteria ) {
		return this.datastore.get( this, id_or_criteria ).
			then( data => {
				if ( Array.isArray(data) ) {
					return data.map( record => {Reflect.constructor(this, record)} );
				} else {
					return Reflect.constructor( this, data );
				}
			});
	}


	constructor( data={} ) {
		this.errors = [];
		this.newObject = true;
		this.data = data;
		this.dirtyFields = [];

		console.debug( `Created a new ${this.constructor.name}: ${data}` );
		this.defineAttributes( data );
	}

	/**
	 * Store the model object in the object's store, calling #store() if the
	 * object is new, or #merge() with any modified fields if it's an existing
	 * object.
	 */
	save() {}


	/**
	 * Data property reader
	 */
	getValue( name ) {
		console.debug(`Getting ${name}`);
		return this.data[ name ];
	}


	/**
	 * Data property writer
	 */
	setValue( name, value ) {
		console.debug(`Setting ${name} to ${value}`);
		if ( this.data[name] !== value ) this.dirtyFields.push( name );
		this.data[ name ] = value;
	}


	/**
	 * 
	 */
	defineAttributes( attrs ) {
		var self = this;

		for ( let name in attrs ) {
			Object.defineProperty( self, name, {
				get: () => { return self.getValue(name); },
				set: newval => { self.setValue(name, newval); }
			});
		}

	}


	/**
	 * Validate the model object by calling its validation methods.
	 *
	 * @returns {Promise}  resolves if the object is valid, rejects if not.
	 *
	 */
	validate() {
		this.errors.clear();
		return new Promise( (resolve, reject) => {
			if ( errors.length == 0 ) {
				resolve();
			} else {
				reject( errors );
			}
		});
	}


}
