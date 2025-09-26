import React from 'react'

function TextBox() {
    return (
        <div className="flex  justify-center items-center gap-2 p-4 border rounded-lg bg-white shadow-sm">
            <textarea
                placeholder="Add the text here ..."
                className="flex-1 resize-none border-0 outline-none bg-transparent min-h-[24px] max-h-32 overflow-y-auto p-2 w-72"
                rows="1"
                onInput={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = e.target.scrollHeight + 'px';
                }}
            />
            <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors" onClick={() => { }}>
                <span className='text-gray-500'>UpLoad</span>
            </button>
        </div>
    )

}

export default TextBox