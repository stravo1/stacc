const urlMaker = (name, mType, folder) => {
  var s = {
    " ": "%20",
    "=": "%3D",
    ",": "%2C",
    '"': "%22",
  };
  //try to simplify the following code later... future me sorry
  var fLink;
  folder != null
    ? (fLink = "'" + folder + "'" + s[" "] + "in" + s[" "] + "parents")
    : (fLink = "");

  var mLink;
  mType != null
    ? (mLink = "mimeType" + s["="] + "'" + mType + "'")
    : (mLink = "");

  var nLink;
  name != null
    ? (nLink = "name" + s[" "] + "contains" + s[" "] + "'" + name + "'")
    : (nLink = "");

  var and = s[" "] + "and" + s[" "];

  var link =
    "https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&fields=files(id%2C%20name%2C%20size%2C%20createdTime%2C%20mimeType)&q=" +
    nLink; //complex turnary upcoming lol xb
  name != null
    ? folder != null
      ? (link += and)
      : mType != null
      ? (link += and)
      : (link += "")
    : (link += "");
  link += fLink;
  mType != null
    ? name != null
      ? (link += and)
      : folder != null
      ? (link += and)
      : (link += "")
    : (link += "");
  link += mLink;

  return link
};

const headerMaker = (accessToken) => {
    var headers = new Headers();
    headers.append("Authorization", "Bearer " + accessToken)
    console.log(headers)
    return headers;
}

export { urlMaker, headerMaker };
