
import randomBytes from 'randombytes';
import AWS from "aws-sdk";

export const uploadImageFile = async (file) => {
    const S3_BUCKET = "realestate-s3-images";
    const REGION = "eu-north-1";
    const rawBytes =  randomBytes(16)
    const imageName = rawBytes.toString('hex')

    AWS.config.update({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_ID_KEY,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
    });
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    const params = {
      Bucket: S3_BUCKET,
      Key: `${imageName}.jpg`,
      Body: file,
    };

    var upload = s3
      .putObject(params)
      .promise();

    await upload.then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
    return `https://realestate-s3-images.s3.eu-north-1.amazonaws.com/${imageName}.jpg`
  };