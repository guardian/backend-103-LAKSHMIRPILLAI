import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Backend103Lakshmirpillai } from './backend-103-lakshmirpillai';

describe('The Backend103Lakshmirpillai stack', () => {
	it('matches the snapshot', () => {
		const app = new App();
		const stack = new Backend103Lakshmirpillai(
			app,
			'Backend103Lakshmirpillai',
			{ stack: 'deploy', stage: 'TEST' },
		);
		const template = Template.fromStack(stack);
		expect(template.toJSON()).toMatchSnapshot();
	});
});
