
// import './App.css'
// import HomePage from './pages/HomePage'
// import ViedoPage from './pages/ViedoPage'



// function App() {


//   return (
//     <>
//       <ViedoPage />


//     </>
//   )
// }

// export default App


import React, { useState } from 'react';

// --- CHILD COMPONENTS ---

function LandingPage({ onGenerate, isLoading }) {
  const [prompt, setPrompt] = useState('');
  const [pdfFile, setPdfFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prompt || !pdfFile) {
      alert('Please provide a prompt and a PDF file.');
      return;
    }
    onGenerate(prompt, pdfFile);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-5 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Generate Video from PDF</h1>
      <p className="text-gray-600 mb-8">Enter a prompt and upload a PDF to get a video explanation.</p>
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4 bg-white p-8 rounded-lg shadow-lg">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., 'Explain the key concepts in Chapter 3 in a simple way'"
          rows="3"
          className="p-3 border border-gray-300 rounded-md text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setPdfFile(e.target.files[0])}
          className="p-3 border border-gray-300 rounded-md text-base file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <button 
          type="submit"
          disabled={isLoading}
          className="p-3 bg-blue-500 text-white border-none rounded-md text-base cursor-pointer transition-colors duration-300 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Generating...' : 'Generate Video'}
        </button>
      </form>
    </div>
  );
}

function Sidebar({ prompt, pdfName }) {
  return (
    <div className="w-72 bg-slate-700 text-white p-5 shadow-lg flex-shrink-0">
      <h2 className="border-b border-slate-500 pb-3 mb-5 text-xl font-semibold">Your Inputs</h2>
      <div className="mt-5 text-left">
        <strong className="text-slate-300">Prompt:</strong>
        <p className="bg-slate-600 p-3 rounded mt-2 break-words text-sm">{prompt}</p>
      </div>
      <div className="mt-5 text-left">
        <strong className="text-slate-300">Document:</strong>
        <p className="bg-slate-600 p-3 rounded mt-2 break-words text-sm">{pdfName}</p>
      </div>
    </div>
  );
}

function VideoDisplay({ videoUrl, transcript }) {
  return (
    <div className="flex-grow p-10 bg-gray-100 overflow-y-auto flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <video
          controls
          autoPlay
          key={videoUrl}
          className="w-full rounded-lg shadow-lg bg-black"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mt-8 text-left w-full max-w-4xl bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Transcript</h3>
        <p className="leading-relaxed text-gray-700">{transcript}</p>
      </div>
    </div>
  );
}

function MainLayout({ userInput, videoData }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar prompt={userInput.prompt} pdfName={userInput.pdfFile?.name} />
      <VideoDisplay videoUrl={videoData.videoUrl} transcript={videoData.transcript} />
    </div>
  );
}

// --- MAIN APP COMPONENT ---

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [userInput, setUserInput] = useState({ prompt: '', pdfFile: null });

  const handleGenerate = async (prompt, pdfFile) => {
    setIsLoading(true);
    setUserInput({ prompt, pdfFile }); // Save user input to display in sidebar

    // --- Backend API Call ---
    // This is where you would send the data to your backend.
    // The backend processes it and returns the video URL and transcript.
    // For this example, we will simulate this with a delay.
    console.log("Sending to backend:", { prompt, fileName: pdfFile.name });

    setTimeout(() => {
      const mockResponse = {
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // A placeholder video
        transcript: `This is a generated transcript based on the document. It explains the key topics requested in the prompt. The process begins by analyzing the core themes of the uploaded PDF, followed by scripting a narrative that addresses the user's specific prompt. This script is then converted into speech, and visuals are synchronized to create the final video output.`,
      };
      setVideoData(mockResponse);
      setIsLoading(false);
      setIsSubmitted(true); // Switch to the main layout
    }, 4000); // Simulate 4-second processing time
  };

  return (
    <div className="text-center font-sans">
      {!isSubmitted ? (
        <LandingPage onGenerate={handleGenerate} isLoading={isLoading} />
      ) : (
        <MainLayout userInput={userInput} videoData={videoData} />
      )}
    </div>
  );
}

export default App;
