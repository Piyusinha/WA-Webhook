const WhatsappModel = require('../models/WhatsappModel');

exports.CreateWhatsappData = async (res) => {
	const newModel = new WhatsappModel(res);
	try {
		return await newModel.save();
	} catch (err) {
        console.log(err.message)
		return err;
	}
};
