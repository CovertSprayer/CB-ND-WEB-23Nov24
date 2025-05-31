const Input = ({label, type="text", name, value, onChange}) => {
  return (
    <div className='mt-2'>
        <label className='font-medium text-sm'>{label} <span className='text-red-600'>*</span></label>
        <input className='border border-gray-200 rounded-sm w-full p-1.5 mt-1' type={type} name={name} value={value} onChange={onChange}/>
    </div>
  )
}

export default Input