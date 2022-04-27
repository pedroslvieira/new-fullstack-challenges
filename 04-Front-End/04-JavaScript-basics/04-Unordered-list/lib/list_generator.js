const listItem = (content) => {
  // TODO: return the proper <li> HTML tag with its content (as a string)
  return `<li class="list-group-item">${content}</li>`;
};

const unorderedList = (items) => {
  // TODO: return the proper <ul> markup (as a string)
  let itemsString = "";
  if (items.length === 0) {
    return '<ul class="list-group"></ul>';
  }
  items.forEach((item) => {
    itemsString += `<li class="list-group-item">${item}</li>`;
  });
  return `<ul class="list-group">${itemsString}</ul>`;
};

// console.log(unorderedList(['hello']));

module.exports = { listItem, unorderedList }; // Do not remove.
