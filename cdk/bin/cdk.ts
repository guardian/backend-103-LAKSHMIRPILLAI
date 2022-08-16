import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { Backend103Lakshmirpillai } from '../lib/backend-103-lakshmirpillai';

const app = new App();
new Backend103Lakshmirpillai(app, 'Backend103Lakshmirpillai-CODE', {
	stack: 'deploy',
	stage: 'CODE',
});
