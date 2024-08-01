// InputData.js
import "../../styles/inputdatapage.css"
import Heading from "../../components/Global/Heading";
const InputData = () => {
  return (
    <div className="input-data-container flex  bg-black p-2">
      <Heading/>
      <main className="main-content">
        <form className="data-form">
          <div className="form-group">
            <label htmlFor="genomicId">Genomic ID</label>
            <input type="text" id="genomicId" placeholder="Genomic ID" />
          </div>
          <div className="form-group">
            <label htmlFor="geneName">Gene Name</label>
            <input type="text" id="geneName" placeholder="Gene Name" />
          </div>
          <div className="form-group">
            <label htmlFor="sequence">Sequence</label>
            <textarea id="sequence" placeholder="Sequence"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="fileUpload">Upload File</label>
            <input type="file" id="fileUpload" />
          </div>
          <button type="submit" className="submit-btn">Save/Upload</button>
          <button type="submit" className="submit-btn">Analyse your Data</button>
        </form>
      </main>
      <footer className="footer mt-14 flex items-center justify-around">
        <div>
        <p>&copy; 2024 AMRAI. All rights reserved.</p>
        </div>
        <div className="footer-links flex justify-center items-end">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default InputData;
