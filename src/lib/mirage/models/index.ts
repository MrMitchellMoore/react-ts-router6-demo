import { Model } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import { Van } from '../../../types/Van';

const VanModel: ModelDefinition<Van> = Model.extend<Van>({
	id: '',
	name: '',
	price: 0,
	description: '',
	imgUrl: '',
	type: '',
});

export const models = {
	van: VanModel,
};
