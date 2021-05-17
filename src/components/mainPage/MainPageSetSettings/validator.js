
const Validator = (value) => ((value < 120 || !value) ? true : false)
const Updater = (setter, toSet) => {
    setter(toSet)
}
module.exports= {
    Validator: Validator,
    Updater: Updater
};
