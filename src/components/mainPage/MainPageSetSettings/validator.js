
const Validator = (value) => ((value < 120 || !value) ? true : false)
const Updater = (setter, toSet) => {
    setter(toSet)
}
export default {
    Validator: Validator,
    Updater: Updater
};
