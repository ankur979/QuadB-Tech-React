import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import "./showSummary.css";
import ModalBox from '../ModalBox';


const ShowSummary = () => {
  const { id } = useParams();
  const [summary, setSummary] = useState(null)
  useEffect(() => {
    const fetchShowSummary = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setSummary(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShowSummary();
  }, [id]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const summaryHTML = ((summary === null) ? "" : { __html: summary.summary });

  return (
    <>
      {summary === null ? "" :
        <div className="summary">
          <div className='first-block'>
            <img src={summary.image.original} alt="" />
          </div>
          <div className='second-block'>
            <h1>{summary.name}</h1>
            <p>language: {summary.language}</p>
            <p>country: {summary.network.country.name}</p>
            <p dangerouslySetInnerHTML={summaryHTML}></p>
            <ModalBox />
            <button className='btn btn-success' onClick={openModal}>Book Ticket</button>

            <ModalBox isOpen={isModalOpen} onClose={closeModal}>
              <h2>{summary.name}</h2>
              <p dangerouslySetInnerHTML={summaryHTML}></p>
              <div className="button">
                <button onClick={closeModal} className='btn btn-danger mr-3'>Close</button>
                <button onClick={closeModal} className='btn btn-primary'>Submit</button>
              </div>
            </ModalBox>

          </div>
        </div>
      }
    </>
  )
}

export default ShowSummary