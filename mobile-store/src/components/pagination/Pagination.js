import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate ,currentPage}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  console.log("currentPage"+currentPage)
  return (
    <nav className="col-md-6 d-flex justify-content-md-center pg-blue" >
      <ul className='pagination'>
      <li className= {(currentPage === 1 ? 'disabled' : '')+'page-item'}>
                    <a  className='page-link' onClick={() => paginate(1)}>First</a>
      </li>

      <li className={(currentPage === 1 ? 'disabled' : '')+'page-item'}>
                    <a className='page-link' onClick={() => paginate(currentPage - 1)}>Previous</a>
                </li>
        {pageNumbers.map(number => (
          <li key={number} className={(currentPage === number ? 'active ' : '') + 'page-item '}>
            <a className='page-link' onClick={() => paginate(number)}  >
              {number}
            </a>
          </li>
        ))}
        <li className={(currentPage === 1 ? 'disabled' : '')+'page-item'}>
                    <a className='page-link' onClick={() => paginate(currentPage + 1)}>Next</a>
                </li>
        <li className={(currentPage === (Math.ceil(totalPosts / postsPerPage)) ? 'disabled' : '')+'page-item'}>
                    <a className='page-link' onClick={() => paginate(totalPages)}>Last</a>
        </li>
      </ul>
    </nav>
    
  );
  
};

export default Pagination;