![CD Workflow](https://github.com/blackboard-innersource/gh-action-golangci-lint/workflows/CD%20Workflow/badge.svg?event=push)

# GitHub Action: Go Lint :white_check_mark:

Use [golangci-lint](https://github.com/golangci/golangci-lint) to lint your code. Any linting issues
are reported as GitHub Annotations which means they will appear on the GitHub Pull Request on
the offending line.

Linting issues that can be auto-fixed by `golangci-lint` appear as Errors while all the other
linting issues appear as Warnings (even though it might be serious).

## Usage

For all possible inputs and outputs see the [Action YAML](action.yml) file.

### Usage: basic

Go to the [releases](https://github.com/golangci/golangci-lint/releases) page to find
the release version you would like to use.  Enter that version into the `version` input:

```yaml
steps:
  - name: lint
    uses: blackboard-innersource/gh-action-golangci-lint@v1
    with:
      version: 1.28.2
```

For added security, you can specify a download checksum. To get the checksum, find the
`golangci-lint-X.Y.Z-checksums.txt` file on the [releases](https://github.com/golangci/golangci-lint/releases)
page. Download the file, open it, and find the line with `linux-amd64` (or the platform/arch you are using).
It would look like this:

```
c893b07dd7d2c8e13b6380dd52781bb6732f7f541d90da2dc941be5f7e8be6fb  golangci-lint-1.28.2-linux-amd64.tar.gz
```

Copy the checksum value enter that into the `checksum` input:

```yaml
steps:
  - name: lint
    uses: blackboard-innersource/gh-action-golangci-lint@v1
    with:
      version: 1.28.2
      checksum: c893b07dd7d2c8e13b6380dd52781bb6732f7f541d90da2dc941be5f7e8be6fb
```

### Usage: control failure

By default, the action will fail the step if any auto-fixable linting issues were found.

If you want the step to never fail due to any linting issues, then use `failOnFixable` input:

```yaml
steps:
  - name: lint
    uses: blackboard-innersource/gh-action-golangci-lint@v1
    with:
      version: 1.28.2
      failOnFixable: false
```

If you want the step to always fail due to any linting issues, then use `failOnIssue` input:

```yaml
steps:
  - name: lint
    uses: blackboard-innersource/gh-action-golangci-lint@v1
    with:
      version: 1.28.2
      failOnIssue: true
```

### Usage: custom arguments

You can pass in custom arguments to `golangci-lint run` command by using the `args` input:

```yaml
steps:
  - name: lint
    uses: blackboard-innersource/gh-action-golangci-lint@v1
    with:
      version: 1.28.2
      args: -E gofmt --no-config
```

## Developing

Install the dependencies:
```bash
$ npm install
```

Build the typescript:
```bash
$ npm run build
```

Run the tests:  
```bash
$ npm run test
```

Update the distribution (required for releasing and testing workflow):
```bash
$ npm run build && npm run pack
$ git commit -a dist/index.js -m "Update dist"
```

## Helpful resources

* [Jest](https://jestjs.io/docs/en/getting-started)
* [Actions toolkit](https://github.com/actions/toolkit)
* [Development Tools for actions](https://help.github.com/en/actions/reference/development-tools-for-github-actions)
* [setup-go action](https://github.com/actions/setup-go)
* [GoReleaser action](https://github.com/goreleaser/goreleaser-action)
* [Javascript action tutorial](https://help.github.com/en/actions/building-actions/creating-a-javascript-action)

## License

Please see the [LICENSE](LICENSE) file.
