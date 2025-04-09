import http from "http"
import qs from "querystring"
// 
const server = http.createServer((req, res) => {
  const { method, url = "" } = req
  const [path, queryStr] = url.split("?")
  const query = qs.decode(queryStr)
  console.log(query)
  if (path === "/" && method?.toLowerCase() === "get") {
    res.end(JSON.stringify(query))
  }
})
server.listen(3001, () => {
  console.log("server on http://127.0.0.1:3001")
})
