import React from "react";
import { getBase64Image } from "../../../helpers";

function Images(props) {
  const { image, setImage } = props;
  const handleChange = (e) => {
    const file = e.target.files[0];
    getBase64Image(file).then((base64Data) => {
      setImage(base64Data);
    });
  };

  return (
    <>
      <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
        <h6 className="mb-0 fw-bold ">Images</h6>
      </div>
      <div className="card-body">
        <form>
          <div className="row g-3 align-items-center">
            <div className="col-md-12">
              <label className="form-label">Product Images Upload</label>
              <small className="d-block text-muted mb-2">
                Only portrait or square images, 2M max and 2000px max-height.
              </small>

              <div id="create-token" className="dropzone">
                <input
                  type="file"
                  accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff, .mp4, .webm, .mp3, awv, .ogg, .glb"
                  onChange={handleChange}
                />
                <img src={image} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Images;
