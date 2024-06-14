//moving const config to this file for project level access from anywhere and making it re-usable
//with the help of "exports." we can make any variable accessible anywhere in the project scope
exports.config = {
    headers:{
        "User-Agent":"axios app"
    }
}
//setting decoration options for the table
exports.options = {
    borderStyle: "solid",
    borderColor: "blue",
    headerAlign: "center",
    align: "left",
    color: "white",
    truncate: "...",
    width: "100%"
  }