# Hello action

A Github action to say hello.

## Usage

Create a Github Action file under `.github/workflows` containing the following definition.

```yml
# .github/workflows/hello.yml
name: Say Hello
on:
  push:
    branches:
      - main
jobs:
  hello:
    name: Say Hello
    runs-on: ubuntu-latest
    steps:
      - uses: adpi2/hello-goodbye/hello@v1
        with:
          goodbye-greeting: Good morning
          receiver: Universe
```
