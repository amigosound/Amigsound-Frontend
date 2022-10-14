import React, { useState } from "react";

function AddPlayListModal({ open, close }) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  return (
    <div
      className={open ? "modal d-block" : "modal fade"}
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add New Playlist
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body">
            <input
              className="form-control title-text-custom"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Enter Title"
            />
          </div>
          <div className="modal-footer">
            <div className="input-group mb-3">
              <div className="input-group-text">
                <div className="checkbox-1 checkbox">
                  <input
                    className="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    checked={check1}
                    onClick={() => {
                      setCheck1(!check1);
                      setCheck2(false);
                    }}
                    name="flex-radio-default"
                    aria-label="Checkbox for following text input"
                  />
                  <span>set as private</span>
                </div>
                <div className="checkbox-2  checkbox">
                  <input
                    className="form-check-input mt-0"
                    type="checkbox"
                    name="flex-radio-default"
                    value=""
                    checked={check2}
                    aria-label="Checkbox for following text input"
                    onClick={() => {
                      setCheck2(!check2);
                      setCheck1(false);
                    }}
                  />
                  <span>set as public</span>
                </div>
              </div>
            </div>
          </div>
          <div className="button-modal">
            <button
              type="button"
              className="btn btn-primary btn-custom"
              onClick={close}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPlayListModal;
