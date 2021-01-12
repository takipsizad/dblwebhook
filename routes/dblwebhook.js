var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json())
router.use(express.json());
require('dotenv').config();
const webhook = process.env.webhook
const { Webhook } = require('discord-webhook-node');
const hook = new Webhook(webhook);

router.get('/', function(req, res) {
    res.send('working')
})
router.post('/', function(req, res) {
  if (req.headers.authorization == process.env.secret) {
	res.send('xd')
    var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json())
router.use(express.json());
require('dotenv').config();
const webhook = process.env.webhook
const { Webhook, MessageBuilder } = require('discord-webhook-node');
const hook = new Webhook(webhook);

router.get('/', function(req, res) {
    res.send('working')
})
router.post('/', function(req, res) {
  if (req.headers.authorization == process.env.secret) {
	res.send('xd')
const user = req.body.user
const embed = new MessageBuilder()
.setTitle('thanks for voting')
.setColor('#00b0f4')
.setDescription(`<@${user}> Just Voted, thanks! Click [here]() to Vote!`)
.setFooter('thanks')
.setDescription(`<@${user}> Just Voted, thanks! Click [here]() to Vote!`)
.setAuthor('hey')
.setTimestamp();
hook.send(embed)
	} else {
		res.send('unautharized')
		console.log('warning')
	}
})

module.exports = router;
	} else {
		res.send('unautharized')
		console.log('warning')
	}
})

module.exports = router;