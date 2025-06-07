import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const Editor = ({value, setValue}) => {

  return (
    <>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </>
  )
}

export default Editor