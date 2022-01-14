function format_CNIC(cnic) {
  let cnic_value = cnic.replace(/[^0-9]/g, "");
  return cnic_value.replace(/(.{5})(.{7})(.{1})/, "$1-$2-$3");
}

function format_BA_Number(value) {
  return value !== null ? value.replace(/[^a-zA-Z0-9-\s]/gi, "") : null;
}

function allowNumberOnly(value) {
  return value !== null ? value.replace(/[^0-9]/g, "") : null;
}

function allowAlphaNumericOnly(value) {
  return value.replace(/[^a-zA-Z0-9]/gi, "");
}

function allowAlphaNumericWithSpaceOnly(value) {
  return value.replace(/[^a-zA-Z0-9\s]/gi, "");
}

function allowAlphabetsWithSpaceOnly(value) {
  return value.replace(/[^a-zA-Z\s]/gi, "");
}

const TEXT_FORMAT = {
  format_CNIC,
  allowAlphaNumericOnly,
  allowAlphaNumericWithSpaceOnly,
  format_BA_Number,
  allowNumberOnly,
  allowAlphabetsWithSpaceOnly,
};
export default TEXT_FORMAT;
