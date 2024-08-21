import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function BasicInformation(props) {
    const { name, setName,textEditor,setTextEditor } = props;

    

    return (
        <>
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Basic information</h6>
            </div>
            <div className="card-body">
                <form>
                    <div className="row g-3 align-items-center">
                        <div className="col-md-6">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" value={name} onChange={(e) =>setName(e.target.value)} />
                        </div>
                        
                        <div className="col-md-12">
                            <label className="form-label">Product Description</label>
                            <CKEditor
                                editor={ClassicEditor}
                                data={textEditor}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                          
                                    setTextEditor(data);
                                  }}
                                config={{
                                    toolbar: [
                                        "heading",
                                        "|",
                                        "bold",
                                        "italic",
                                        "link",
                                        "bulletedList",
                                        "numberedList",
                                        "|",
                                        "imageUpload",
                                        "blockQuote",
                                        "insertTable",
                                        "|",
                                        "imageTextAlternative"

                                    ]
                                }}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default BasicInformation