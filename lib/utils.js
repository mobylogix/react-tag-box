'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var PropTypes = require('prop-types');

var TagProp = PropTypes.shape({
  value: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired
});

exports.default = TagProp;
