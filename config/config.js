const AWS = require("aws-sdk");

var aws_remote_config = {
  accessKeyId: "AKIAIR6MU66IMZX25HOA",
  secretAccessKey: "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",
  region: "ap-south-1",
};

AWS.config.update(aws_remote_config);

var awsconfig = {
  conf: aws_remote_config,
  docClient: new AWS.DynamoDB.DocumentClient(),
  dynamoDB: new AWS.DynamoDB(),
  s3: new AWS.S3(),
  ses: new AWS.SES({ apiVersion: "2010-12-01" }),
};

module.exports = awsconfig;