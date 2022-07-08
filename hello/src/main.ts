import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const goodbye = core.getInput('hello-greeting')
    const receiver = core.getInput('receiver')

    core.info(`${goodbye}, ${receiver}!`)
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error)
    } else {
      core.setFailed(`unknown error: ${error}`)
    }
  }
}

run()
