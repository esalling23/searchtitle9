/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 * 
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */

exports.create = {
	User: [
	  { 'name.first': 'User', 'name.last': 'Admin', email: 'user@admin.edu', password: 'password', isAdmin: true }
	]
};