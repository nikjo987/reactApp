import _ from "lodash";

export function paginate(itemList, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  return _(itemList)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
