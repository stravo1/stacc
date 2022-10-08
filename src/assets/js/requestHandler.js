import axios from "axios";
const uploadFiles = async (
  accessToken,
  name,
  content,
  fileId = null,
  parent = "appDataFolder"
) => {
  //couldn't bother with, had few issues earlier + using it anyways for getting stuff
  var outResolve, response;
  var promise = new Promise((resolve, reject) => {
    outResolve = resolve;
  });
  var xhr_up = new XMLHttpRequest();
  xhr_up.open(
    fileId == null ? "POST" : "PATCH",
    fileId == null
      ? "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart"
      : "https://www.googleapis.com/upload/drive/v3/files/" +
          fileId +
          "?uploadType=multipart"
  );
  xhr_up.setRequestHeader("Authorization", "Bearer " + accessToken);
  //xhr_up.upload.onprogress = updateProgress
  xhr_up.onload = function () {
    if (this.status == 200) {
      //console.log("Uploaded", this.response)
      response = JSON.parse(this.response);
    } else {
      //console.log("error", this.status)
    }
    outResolve();
  };
  var fileContent, fileType, fileName;
  fileContent = content;
  fileType = "application/json";
  fileName = name;

  var metadata = {
    name: fileName,
    mimeType: fileType,
    parents: [parent],
  };
  if (fileId != null) {
    delete metadata["parents"];
    delete metadata["name"];
  }
  var file = new Blob([fileContent], { type: fileType });

  var data = new FormData();
  data.append(
    "metadata",
    new Blob([JSON.stringify(metadata)], { type: "application/json" })
  );
  data.append("file", file);

  xhr_up.send(data);
  await promise;
  return response;
};

const getFileContent = async (accessToken, fileId) => {
  var outResolve, response;
  var format = "raw";
  //console.log(state.filesList, "messages");
  const promise = new Promise((resolve, reject) => {
    outResolve = resolve;
  });
  //for returning
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://www.googleapis.com/drive/v3/files/" + fileId + "?alt=media",
    true
  );
  xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
  xhr.onload = function () {
    if (this.status === 200) {
      ////console.log(this.response)
      if (format == "messages") response = JSON.parse(this.response).messages;
      else response = this.response;
      outResolve();
      ////console.log("came here at last last")
      ////console.log(this.status)
    }
  };

  //xhr.withCredentials = true;
  xhr.send();
  await promise;

  return response;
};
const getNewToken = async () => {
  var refreshToken = localStorage.getItem("refresh_token");
  var res = await axios.post(
    "http://https://ninth-matter-357304.el.r.appspot.com/auth/google/refresh-token",
    {
      refreshToken,
    }
  );
  localStorage.setItem("access_token", res.data.access_token);
  return res.data.access_token;
};
export { uploadFiles, getFileContent, getNewToken };
