const express = require("express");
const cors = require("cors");
const path = require('path')

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_KEY)

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if(process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client', 'build')));
	app.get('*',(req,res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
	})
}

app.post('/payment', (req, res) => {
	const { token, amount } = req.body;
	if (!token || !amount)  {
		return res.status(400).json({
			status:'fail',
			message:'please full filed all the requirement',
		})
	}
	const stripeBody = {
		source: token.id,
		amount,
		currency:'usd'
	}
	stripe.charges.create(stripeBody, (stripeErr, stripeRes) => {
		if (stripeErr) {
			return res.status(500).json({
				status:"error",
				data:stripeErr
			})
		}
		res.status(200).json({
			status:'success',
			data:stripeRes
		})
	})
})

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log("app is running " + PORT));
