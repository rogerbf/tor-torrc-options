const { execFile } = require(`child_process`)

module.exports = listOptions

function listOptions (path = `tor`) {
  return new Promise((resolve, reject) => {
    execFile(path, [ `--list-torrc-options` ], (error, stdout, stderr) => {
      error && reject(error)
      stderr.length > 0 && reject(stderr.trim())
      resolve(stdout.trim().split(`\n`))
    })
  })
}
