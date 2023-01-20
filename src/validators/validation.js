const validationEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<;>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //REGEX EMAIL;
    return regex.test(String(email).toLowerCase());
}

const validationPassword  = (password) => {
    const regex = /[A-Za-z\d$@$!%*?&]{8,15}/; //REGEX password;
    return regex.test(String(password));
}



module.exports = { validationPassword, validationEmail };