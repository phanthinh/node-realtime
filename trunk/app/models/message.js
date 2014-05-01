/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Message Schema
 */
var MessageSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    sender: {
        type: Schema.ObjectId,
        ref: 'User'
    },
	receiver: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
MessageSchema.path('content').validate(function(content) {
    return content.length;
}, 'content cannot be blank');



mongoose.model('Message', MessageSchema);