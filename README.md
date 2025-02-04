# Fetch GitHub Copilot Metrics

This action fetches the metrics from the GitHub Copilot API and stores them in a JSON file.
Allows you to easily fetch the metrics from the GitHub Copilot API and store them in a JSON file for further processing or use in your workflows.

## Usage

```yaml
- name: Fetch GitHub Copilot Metrics
  uses: RickardHF/fetch-metrics-action@v1
  with:
    token: <A GitHub Token, preferably from a GitHub App>
    org: <Your GitHub Organization Slug>
    file-name: <The name of the file to store the metrics in> # Optional, defaults to 'copilot-metrics'
```

## Inputs

### `token`

**Required** A GitHub Token, preferably from a GitHub App.

**NOTE:** This token needs at least of the following permissions to be set to be able to fetch the metrics.

- "GitHub Copilot Business" organization permissions (read)
- "Administration" organization permissions (read)

### `org`

**Required** Your GitHub Organization Slug.

### `file-name`

**Optional** The name of the file to store the metrics in. Default: 'copilot-metrics'.

## Outputs

The action will store the metrics in a JSON file with the name specified in the `file-name` input with the file extension `.json`. The file can then be used in further steps in your workflow. Eg. to upload the file as an artifact, handle the metrics in a script, upload the data to a database or blob container, etc.
