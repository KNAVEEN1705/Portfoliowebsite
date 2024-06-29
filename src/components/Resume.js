import resume from '../assests/resume.gif';
import clickme from '../assests/clikeme.gif';

export default function Resume() {
  const PDF_FILE_URL = 'https://example.com/resume.pdf'; // Update this URL to point to your PDF file

  const downloadFileAtUrl = (url) => {
    const filename = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <section id='resume' className='flex flex-col md:flex-row px-5 font-Home-font'>
      <div className='md:w-1/2'>
        <img className='w-[500px]' src={resume} alt="About Gif" />
      </div>
      <div className='md:w-1/2 pl-10'>
        <div className='flex flex-col justify-center pt-16'>
          <h1 className='text-4xl border-b-4 border-[#318445] mb-5 w-[155px] text-justify font-bold'>RESUME</h1>
          <p className='text-justify'>Ambitious fresher with a strong passion for building dynamic interfaces. Proficient in JavaScript and ReactJS, with a keen interest in expanding my skills to backend development. Eager to learn and grow as a full-stack developer.</p>
          <p>CLICK HERE TO VIEW MY RESUME
            <button onClick={() => { downloadFileAtUrl(PDF_FILE_URL) }} className="hover:text-[#318445]">
              <img className="w-[80px]" src={clickme} alt="Click Me" />
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}