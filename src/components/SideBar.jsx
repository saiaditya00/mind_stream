import React from 'react';
import TextBox from './TextBox';
function SildeBar() {
    return (
        <>
            <div className=" h-screen bg-white shadow-md  flex flex-col justify-end">
                <div className='fixed bottom-0  w-80'>

                    <TextBox />
                </div>

            </div>
        </>
    )
}

export default SildeBar;