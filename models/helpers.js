const set = info => {
  const reducer = (result, val) => result + `${val[0]}='${val[1]}', `;
  return Object.entries(info).reduce(reducer, '').slice(0, -2);
};

const sanitizeInfo = (info, type) => {
  switch (type) {
    case 'user':
      if (info.photo_url == undefined) info.photo_url = 'http://shec-labs.com/wp-content/themes/creativemag/images/default.png';
      if (info.location == undefined) info.location = null;
      if (info.bio == undefined) info.bio = null;
      return info;
      break;
    case 'collection':
      if (info.description == undefined) info.description = null;
      return info;
      break;
    default:
      return info;
  }
};

module.exports = { set, sanitizeInfo }
