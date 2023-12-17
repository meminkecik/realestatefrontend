import React, { useState } from 'react';
import {  uploadImageFile } from '../../helpers/s3';
import { Button, Form, Image } from 'react-bootstrap';

const ImageUploader = ({setFieldValue}) => {
  const [imageFile, setImageFile] = useState(null);
  const [uploadUrl, setUploadUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleUpload = async () => {
    const url = await uploadImageFile(imageFile);
    setUploadUrl(url);
    setFieldValue('imageUrl', url);

  };

  const handleCancel = () => {
    setUploadUrl(null);
    setImageFile(null);
  }
  if (!uploadUrl) {
    return (
        <Form.Group>
          <Form.Control placeholder='Update Photo' type="file" onChange={handleFileChange} className='mb-3' />
          <Button onClick={handleUpload} type='submit' disabled={!imageFile}>Upload</Button>
        </Form.Group>
    );
  }

  return (
    <>
    <div className='mb-3'>
    <Image src={uploadUrl} alt="Yüklenen resim" width={200} height={200} />
    </div>
    <div>
    <Button onClick={handleCancel} type='button'>Cancel</Button>
    </div>
    </>
  );
};

export default ImageUploader;