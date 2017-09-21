import PropTypes from "prop-types";

export default {
  raf_validator: PropTypes.func,
  raf_asyncValidator: PropTypes.func,
  raf_location: PropTypes.string.isRequired,
  raf_errorLocation: PropTypes.string
};
