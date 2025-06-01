const Input = ({label, type="text", name, value, onChange, error=""}) => {
  return (
    <div className='mt-2'>
        <label className='font-medium text-sm'>{label} <span className='text-red-600'>*</span></label>
        <input className={`border ${error ? "border-red-600" : "border-gray-200" } rounded-sm w-full p-1.5 mt-1`} type={type} name={name} value={value} onChange={onChange}/>
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
    </div>
  )
}

export default Input