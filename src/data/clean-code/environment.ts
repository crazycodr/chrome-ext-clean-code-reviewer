import {CodeSmellStructure} from "../../models/codeSmellStructure";

const e1 = new CodeSmellStructure(
    'E1',
    'Environment',
    'Build Requires More Than One Step',
    'Building a project or a piece of code should not require multiple manual steps, everything should be automated or could be made automated. You should not need to lookup inside the code to build something or adjust configuration scripts based on changes in the code.',
    'Environment',
    287
);

const e2 = new CodeSmellStructure(
    'E2',
    'Environment',
    'Tests Require More Than One Step',
    'Testing should require only a single script to run, no configuration or reset of state and they should not affect the state of other processes.',
    'Environment',
    287
);

export {e1, e2};