# Goodbye action

A Github action to say goodbye.

## Usage

Create a Github Action file under `.github/workflows` containing the following definition.

```yml
# .github/workflows/bye.yml
name: Say Goodbye
on:
  push:
    branches:
      - main
jobs:
  goodbye:
    name: Say Goodbye
    runs-on: ubuntu-latest
    steps:
      - uses: adpi2/hello-goodbye/goodbye@v1
        with:
          hello-greeting: See you
          receiver: Universe
```
