const AWS = require("aws-sdk");
require('dotenv').config()
console.log(process.env.accessKeyId)
var aws_remote_config = {
  accessKeyId: process.env.accessKeyId,
  secretAccessKey:  process.env.secretAccessKey,
  region: "ap-south-1",
};

AWS.config.update(aws_remote_config);
AWS.config.update({endpoint: 'http://localhost:5000'});

var awsconfig = {
  conf: aws_remote_config,
  docClient: new AWS.DynamoDB.DocumentClient(),
  dynamoDB: new AWS.DynamoDB(),
  s3: new AWS.S3(),
  ses: new AWS.SES({ apiVersion: "2010-12-01" }),
};

module.exports = awsconfig;