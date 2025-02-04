const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {
    try {
        const token = core.getInput('token', { required: true });
        const org = core.getInput('org', { required: true });
        const file_name = core.getInput('file_name') || 'copilot-metrics';
        console.log(`Fetching Copilot Metrics for ${org}`);

        const octokit = new github.getOctokit(token);

        const response = await octokit.request('GET /orgs/{org}/copilot/metrics', {
            org: org
        });

        console.log(response.data);
        // write the response to file
        const fs = require('fs');
        fs.writeFileSync(`${file_name}.json`, JSON.stringify(response.data, null, 2));

    }
    catch (error) {
        core.setFailed(error.message);
    }
};

main();