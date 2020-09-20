export default (type, defaultValue) => {
  switch (type) {
    case 'String':
    case 'string':
    case String:
      return defaultValue || '';
    case Array:
    case 'Array':
    case 'array':
      return defaultValue || [];
    case Number:
    case 'number':
    case 'Number':
      return defaultValue || 0;
    case Object:
    case 'Object':
    case 'object':
      return defaultValue || {};
    default:
      return defaultValue || '';
  }
};
