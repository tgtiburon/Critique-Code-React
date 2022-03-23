const mongoose = require('mongoose');

const { Schema } = mongoose;

const bcrypt = require('bcrypt');

const userSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    
    userName: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please input a valid email address"]
    },
    
    password: {
        type: String,
        required: true,
        minlength: 5
    },

    title: {
        type: String,
        required: false,
        trim: true
    },

    bio: {
        type: String,
        required: false,
        trim: true
    },

    github: {
        type: String,
        required: false
    },

    avatar: {
        type: String,
        required: false
    }
});

// pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare hashed password to incoming password
userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;