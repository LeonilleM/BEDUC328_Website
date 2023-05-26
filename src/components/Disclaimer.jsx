import React, {useState} from 'react'

function Disclaimer() {
    const [showToast, setShowToast] = useState(true);

    const handleCloseToast = () => {
        setShowToast(false);
      };
    
      if (!showToast) {
        return null; // Hide the toast if showToast is false
      }

    return (
        <div className="fixed top-0 right-0 py-5 px-5" style={{zIndex:9999}}>
            <div id="toast-default" className="flex w-full max-w-xs p-4 text-white rounded-md shadow bg-uw-purple" role="alert">
                <button 
                type="button" 
                onClick={handleCloseToast}
                aria-label="Close"
                className="ml-auto -mx-1.5 -my-1.5 rounded-md focus:ring-2 focus:ring-gray-300 p-1.5  inline-flex h-8 w-8" 
                data-dismiss-target="#toast-default">
                    <span className="sr-only">Close</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="ml-3 text-sm font-roboto"> <span className="font-roboto font-semibold">Disclaimer:</span> We are UW Students, and the viewed expressed here are not represented by University itself.
                </div>
            </div>
        </div>


    )
}

export default Disclaimer