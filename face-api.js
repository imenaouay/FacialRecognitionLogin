async function captureFaceDescriptor() {
    const video = document.getElementById('webcam');
    const canvas = faceapi.createCanvasFromMedia(video);
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);
  
    // Detect faces and extract descriptors
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptors();
  
    if (detections.length > 0) {
      return Array.from(detections[0].descriptor); // Extract the first face's descriptor
    } else {
      alert('No face detected. Please try again.');
      return null;
    }
  }