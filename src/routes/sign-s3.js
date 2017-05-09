const aws = require('aws-sdk');
const S3_BUCKET = process.env.S3_BUCKET;

module.exports = {
  method: 'GET',
  path: '/sign-s3',
  handler: (request, reply) => {
    const s3 = new aws.S3({ region: 'eu-west-2', signatureVersion: 'v4' });
    const fileName = request.query['file-name'];
    const fileType = request.query['file-type'];
    console.log(request.query);
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 3000,
      ContentType: fileType,
      ACL: 'public-read',
    };

    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if (err) {
        console.log(err);
        return reply(err);
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
      };
      reply(JSON.stringify(returnData));
    });
  },
};
