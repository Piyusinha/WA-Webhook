const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const whatsappMongo = new Schema(
	{
		object: {
			type: String
		},
		entry: {
			type: [
				{
					id: {
						type: String
					},
					changes: {
						type: [{
							value: {
								messaging_product: {
									type: String
								},
								metadata: {
									display_phone_number: {
										type: String
									},
									phone_number_id: {
										type: String
									}
								},
								contacts: [{
									profile: {
										name: {
											type: String
										}
									},
									wa_id: {
										type: String
									}
								}],
								messages: [{
									from: {
										type: String
									},
									id: {
										type: String
									},
									timestamp: {
										type: String
									},
									text: {
										body: {
											type: String
										}
									},
									type: {
										type: String
									}
								}]
							}, field: {
								type: String
							}
						}]
					}
				}
			]
		}
	}
);

const Whatsapp = mongoose.model('Whatsapp', whatsappMongo);
module.exports = Whatsapp;
